import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Form from "../../../common/form/Form";
import Input from "../../../common/form/Input";
import Button from "../../../common/form/Button";
import {useDispatch, useSelector} from "react-redux";
import {addForumCatalog} from "../../../../../redux/actions/forumActions";
import {addEmployeeAction} from "../../../../../redux/actions/userActions";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const NAME = 'NAME';
const LAST_NAME = 'LAST_NAME';
const EMAIL = 'EMAIL';
const PASSWORD = 'PASSWORD';

export default function AddEmployee(props){
    const token = useSelector(state=>state.user_info.token);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
    });

    function inputChangeHandler(e, type){
        switch (type){
            case NAME:
                setUser(prevState=>{
                    return{...prevState, name: e.target.value}
                })
                break;
            case LAST_NAME:
                setUser(prevState=>{
                    return{...prevState, last_name: e.target.value}
                })
                break;
            case EMAIL:
                setUser(prevState=>{
                    return{...prevState, email: e.target.value}
                })
                break;
            case PASSWORD:
                setUser(prevState=>{
                    return{...prevState, password: e.target.value}
                })
                break;
        }
    }

    function sendHandler(e){
        e.preventDefault();
        dispatch(addEmployeeAction({data: user, token: token}));
        setUser({
            name: '',
            last_name: '',
            email: '',
            password: '',
            is_employee: true
        });
    }

    return(
        <Wrapper>
            <br/>

            <Form title={'Обновить статью'} width={"600px"}>
                <Input
                    label="Имя"
                    type={'text'}
                    filled={user.name.length!==0?true:false}
                    value={user.name}
                    changeHandler={inputChangeHandler}
                    t={NAME}
                />
                <Input
                    label="Фамилия"
                    type={'text'}
                    filled={user.last_name.length!==0?true:false}
                    value={user.last_name}
                    changeHandler={inputChangeHandler}
                    t={LAST_NAME}
                />
                <Input
                    label="Email"
                    type={'email'}
                    filled={user.email.length!==0?true:false}
                    value={user.email}
                    changeHandler={inputChangeHandler}
                    t={EMAIL}
                />
                <Input
                    label="Пороль"
                    type={'password'}
                    filled={user.password.length!==0?true:false}
                    value={user.password}
                    changeHandler={inputChangeHandler}
                    t={PASSWORD}
                />
                <Button
                    enabled={(user.name.length!==0&&user.last_name.length!==0&&user.email.length!==0&&user.password.length!==0)}
                    sendHandler={sendHandler}
                >
                    Добавить
                </Button>
            </Form>

        </Wrapper>
    )
}