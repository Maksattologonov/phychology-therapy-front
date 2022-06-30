import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Form from "../../../common/form/Form";
import Input from "../../../common/form/Input";
import Textarea from "../../../common/form/Textarea";
import Button from "../../../common/form/Button";
import {useDispatch, useSelector} from "react-redux";
import {addPublication} from "../../../../../redux/actions/publicationAction";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const TITLE = 'TITLE';
const DESCRIPTION = 'DESCRIPTION';
const IMAGE = 'IMAGE';

export default function PublicationCreate(props){
    const token = useSelector(state=>state.user_info.token);
    const [article, setArticle] = useState({title: '', description: '', image: ''});
    const dispatch = useDispatch();

    function inputChangeHandler(e, type){
        switch (type){
            case TITLE:
                setArticle(prevState=>{
                    return{...prevState, title: e.target.value}
                })
                break;
            case DESCRIPTION:
                setArticle(prevState=>{
                    return{...prevState, description: e.target.value}
                })
                break;
            case IMAGE:
                setArticle(prevState=>{
                    return{...prevState, image: e.target.files[0]}
                })
                break;
        }
    }

    function sendHandler(e){
        e.preventDefault();
        dispatch(addPublication({
            data:{
                title: article.title,
                description: article.description,
                image: article.image
            },
            token: token
        }));
        setArticle({title: '', description: '', image: ''});
    }

    return(
        <Wrapper>
            {
                article?
                    <Form title={'Обновить статью'} width={"600px"}>
                        <Input
                            label="Тема"
                            type={'text'}
                            filled={article.title.length!==0?true:false}
                            value={article.title}
                            changeHandler={inputChangeHandler}
                            t={TITLE}
                        />
                        <Textarea
                            label="Описание"
                            filled={article.description.length!==0?true:false}
                            value={article.description}
                            changeHandler={inputChangeHandler}
                            t={DESCRIPTION}
                        />
                        <Input
                            label="Картинка"
                            type={'file'}
                            filled={article.image}
                            changeHandler={inputChangeHandler}
                            t={IMAGE}
                        />
                        <Button
                            enabled={(article.title.length!==0&&article.description.length!==0)}
                            sendHandler={sendHandler}
                        >
                            Изменить
                        </Button>
                    </Form>:
                    null
            }
        </Wrapper>
    )
}