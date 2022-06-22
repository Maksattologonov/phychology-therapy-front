import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Form from "admin_panel/components/common/form/Form";
import {useDispatch, useSelector} from "react-redux";
import Textarea from "../../../common/form/Textarea";
import Input from "../../../common/form/Input";
import Button from "../../../common/form/Button";
import {updatePublication} from "../../../../../redux/actions/publicationAction";

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

export default function PublicationUpdate(props){

    const publications = useSelector(state=>state.publication_state.publications);
    const token = useSelector(state=>state.user_info.token);
    const [article, setArticle] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        setArticle(()=>{
            let item = publications.find(item=>item.id===props.id);
            if(item){
                return {...item}
            }else{
                return null
            }
        })
    }, [])

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
        dispatch(updatePublication({
            data:{
                id: article.id,
                title: article.title,
                description: article.description
            },
            token: token
        }));
    }

    return(
        <Wrapper>
            {
                article?
                    <Form title={'Обновить статью'} width={"600px"}>
                        <Input
                            label="Title"
                            type={'text'}
                            filled={article.title.length!==0?true:false}
                            value={article.title}
                            changeHandler={inputChangeHandler}
                            t={TITLE}
                        />
                        <Textarea
                            label="Title"
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