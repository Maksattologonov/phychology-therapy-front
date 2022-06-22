import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Form from "admin_panel/components/common/form/Form";
import Input from "admin_panel/components/common/form/Input";
import Button from "../../../common/form/Button";
import {userProfileUpdate} from "../../../../../redux/actions/userActions";
import {useDispatch, useSelector} from "react-redux";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`

const FIRST_NAME = 'FIRST_NAME';
const LAST_NAME = 'LAST_NAME';

export default function ProfileUpdate(props){

    let [state, setState] = useState({
        first_name: '',
        last_name: ''
    })
    const token = useSelector(state=>state.user_info.token);
    const dispatch = useDispatch();

    useEffect(()=>{
        setState({
            first_name: props.first_name,
            last_name: props.last_name
        })
    }, [])

    function inputChangeHandler(e, type){
        if(type===FIRST_NAME){
            setState(prevState => {
                return{...prevState, first_name: e.target.value}
            })
        }else if(type===LAST_NAME){
            setState(prevState => {
                return{...prevState, last_name: e.target.value}
            })
        }
    }

    function sendHandler(e){
        e.preventDefault();
        dispatch(userProfileUpdate({
            data: {
                name: state.first_name,
                last_name: state.last_name
            },
            token: token
        }))
    }

    return(
        <Wrapper>
            <Form title={'Обновить личные данные'} width={"450px"}>
                <Input
                    label="Имя"
                    type={'text'}
                    filled={state.first_name.length!==0?true:false}
                    value={state.first_name}
                    changeHandler={inputChangeHandler}
                    t={FIRST_NAME}
                />
                <Input
                    label="Фамилия"
                    type={'text'}
                    filled={state.last_name.length!==0?true:false}
                    value={state.last_name}
                    changeHandler={inputChangeHandler}
                    t={LAST_NAME}
                />
                <Button
                    enabled={(state.first_name.length!==0&&state.last_name.length!==0)}
                    sendHandler={sendHandler}
                >
                    Изменить
                </Button>
            </Form>
        </Wrapper>
    )
}