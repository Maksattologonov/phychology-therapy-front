import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Form from "../../../common/form/Form";
import Input from "../../../common/form/Input";
import Textarea from "../../../common/form/Textarea";
import Button from "../../../common/form/Button";
import {useDispatch, useSelector} from "react-redux";
import {addGalleryImageAction, getGalleryCatalogsAction} from "../../../../../redux/actions/galleryActions";
import Selector from "../../../common/form/Selector";
import ContentMessage from "../../../common/ContentMessage";
import SpinnerComponent from "../../../../../Components/Spinner/SpinnerComponent";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const TITLE_ID = 'TITLE_ID';
const IMAGE_FILE = 'IMAGE_FILE';

export default function AddGalleryIMage(props){
    const token = useSelector(state=>state.user_info.token);
    const [image, setImage] = useState({title_id: '', image: ''});
    const categories = useSelector(state=>state.gallery_state.catalogs);
    const spinner = useSelector(state=>state.gallery_state.spinner);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(categories.length===0){
            dispatch(getGalleryCatalogsAction());
        }
    }, [])

    function inputChangeHandler(e, type){
        switch (type){
            case TITLE_ID:
                setImage(prevState=>{
                    return{...prevState, title_id: e.target.value}
                })
                break;
            case IMAGE_FILE:
                setImage(prevState=>{
                    return{...prevState, image: e.target.files[0]}
                })
                break;
        }
    }

    function sendHandler(e){
        e.preventDefault();
        dispatch(addGalleryImageAction({
            title_id: image.title_id,
            image: image.image,
            token: token
        }));
        setImage({title_id: '', image: ''});
    }


    return(
        <Wrapper>
            {

                <Form title={'Обновить статью'} width={"500px"}>

                    {
                        spinner?
                            <SpinnerComponent/>:
                            categories.length===0?
                                <ContentMessage>"Сначала создайте категории"</ContentMessage>:
                                    <Selector
                                        label={"Выберите категорию"}
                                        options={categories}
                                        filled={image.title_id.length!==0}
                                        changeHandler={inputChangeHandler}
                                        t={TITLE_ID}
                                    />
                    }

                    <Input
                        label="Выберите картинку"
                        type={'file'}
                        filled={image.image.length!==0?true:false}
                        changeHandler={inputChangeHandler}
                        t={IMAGE_FILE}
                    />
                    <Button
                        enabled={(image.title_id.length!==0&&image.image.length!==0)}
                        sendHandler={sendHandler}
                    >
                        Добавить
                    </Button>
                </Form>
            }
        </Wrapper>
    )
}