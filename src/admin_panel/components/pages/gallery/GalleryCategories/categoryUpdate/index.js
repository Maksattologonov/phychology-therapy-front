import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Form from "admin_panel/components/common/form/Form";
import {useDispatch, useSelector} from "react-redux";
import Textarea from "admin_panel/components/common/form/Textarea";
import Input from "admin_panel/components/common/form/Input";
import Button from "admin_panel/components/common/form/Button";
import {updateGalleryCatalogAction} from "../../../../../../redux/actions/galleryActions";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const TITLE = "TITLE";
const DESCRIPTION = "DESCRIPTION";

export default function CategoryUpdate(props){

    const categories = useSelector(state=>state.gallery_state.catalogs);
    const token = useSelector(state=>state.user_info.token);
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        setCategory(()=>{
            let item = categories.find(item=>item.id===props.id);
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
        dispatch(updateGalleryCatalogAction({
            data:{
                id: category.id,
                title: category.title,
                description: category.description,
            },
            token: token
        }));
        props.closePage();
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