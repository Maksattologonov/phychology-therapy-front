import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SpinnerComponent from "../../../../../../Components/Spinner/SpinnerComponent";
import ItemCard from "../../../../common/ItemCard";
import {useDispatch, useSelector} from "react-redux";
import {getGalleryImagesAction} from "../../../../../../redux/actions/galleryActions";
import ContentMessage from "admin_panel/components/common/ContentMessage";
import {getImageUrl} from "../../../../../../config/fileConfig";
import {deletePublication} from "../../../../../../redux/actions/publicationAction";
import {AiFillDelete} from "react-icons/ai";
import {toast} from "react-toastify";


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const BackIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #0D2D62;
  cursor: pointer;
`

export default function CategoryImages(props){

    const images = useSelector(state=>state.gallery_state.images);
    const spinner = useSelector(state=>state.gallery_state.spinner);
    const token = useSelector(state=>state.user_info.token);
    const dispatch = useDispatch()

    useEffect(()=>{
        if(images.length===0){
            dispatch(getGalleryImagesAction({title_id: props.id}));
        }
    }, [])

    function deleteHandler(id){
        toast.info("Функция временно недоступен");
        // dispatch(deletePublication({
        //     id: id,
        //     token: token
        // }))
    }

    return(
        <Wrapper>
            <BackIcon>
                <span onClick={props.closePage}> {"<- назад"} </span>
            </BackIcon>
            {
                spinner ?
                    <SpinnerComponent/>
                    :
                    images.length !== 0 ?
                        images.map((item, index) => {
                            return (
                                <ItemCard
                                    topBar={[
                                        {icon:<AiFillDelete/>, handler: deleteHandler},
                                    ]}
                                    id={item.id}
                                    text={"Image"}
                                    image={item.url}
                                    index={index}
                                    key={index}
                                />
                            )
                        }) :
                        <ContentMessage>
                            Картинок пока нету
                        </ContentMessage>
            }
        </Wrapper>
    )
}