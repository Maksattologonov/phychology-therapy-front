import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Form from "../../../common/form/Form";
import Input from "../../../common/form/Input";
import Textarea from "../../../common/form/Textarea";
import Button from "../../../common/form/Button";
import {useDispatch, useSelector} from "react-redux";
import {createGalleryCategoryAction} from "../../../../../redux/actions/galleryActions";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const TITLE = 'TITLE';
const DESCRIPTION = 'DESCRIPTION';

export default function CreateCategory(props){
    const token = useSelector(state=>state.user_info.token);
    const [category, setCategory] = useState({title: '', description: ''});
    const dispatch = useDispatch();

    function inputChangeHandler(e, type){
        switch (type){
            case TITLE:
                setCategory(prevState=>{
                    return{...prevState, title: e.target.value}
                })
                break;
            case DESCRIPTION:
                setCategory(prevState=>{
                    return{...prevState, description: e.target.value}
                })
                break;
        }
    }

    function sendHandler(e){
        e.preventDefault();
        dispatch(createGalleryCategoryAction({
            title: category.title,
            description: category.description,
            token: token
        }));
        setCategory({title: '', description: ''});
    }

    return(
        <Wrapper>
            {
                category?
                    <Form title={'Обновить статью'} width={"600px"}>
                        <Input
                            label="Тема"
                            type={'text'}
                            filled={category.title.length!==0?true:false}
                            value={category.title}
                            changeHandler={inputChangeHandler}
                            t={TITLE}
                        />
                        <Textarea
                            label="Описание"
                            filled={category.description.length!==0?true:false}
                            value={category.description}
                            changeHandler={inputChangeHandler}
                            t={DESCRIPTION}
                        />
                        <Button
                            enabled={(category.title.length!==0&&category.description.length!==0)}
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