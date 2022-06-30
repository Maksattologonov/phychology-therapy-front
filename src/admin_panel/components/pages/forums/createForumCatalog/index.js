import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Form from "../../../common/form/Form";
import Input from "../../../common/form/Input";
import Button from "../../../common/form/Button";
import {useDispatch, useSelector} from "react-redux";
import {addForumCatalog} from "../../../../../redux/actions/forumActions";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const TITLE = 'TITLE';

export default function CreateForumCatalog(props){
    const token = useSelector(state=>state.user_info.token);
    const [catalog, setCatalog] = useState({title: ''});
    const dispatch = useDispatch();

    function inputChangeHandler(e, type){
        switch (type){
            case TITLE:
                setCatalog(prevState=>{
                    return{...prevState, title: e.target.value}
                })
                break;
        }
    }

    function sendHandler(e){
        e.preventDefault();
        dispatch(addForumCatalog({
            title: catalog.title,
            token: token
        }));
        setCatalog({title: ''});
    }

    return(
        <Wrapper>
            <br/>

                <Form title={'Обновить статью'} width={"600px"}>
                    <Input
                        label="Тема"
                        type={'text'}
                        filled={catalog.title.length!==0?true:false}
                        value={catalog.title}
                        changeHandler={inputChangeHandler}
                        t={TITLE}
                    />
                    <Button
                        enabled={(catalog.title.length!==0)}
                        sendHandler={sendHandler}
                    >
                        Добавить
                    </Button>
                </Form>

        </Wrapper>
    )
}