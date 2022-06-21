import React, {useEffect, useState} from "react";
import classes from "./ImagesOfCatalogStyle.module.scss";
import Subtitle from "../../../Common/Subtitle/SubtitleComponent";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getGalleryImagesAction} from "../../../../redux/actions/galleryActions";
import ImageCard from "./ImageCard/ImageCard";
import SpinnerComponent from "../../../Spinner/SpinnerComponent";



function ImagesOfCatalog(){
    let {id} = useParams();
    const catalogs =  useSelector(state=>state.gallery_state.catalogs);
    const images = useSelector(state=>state.gallery_state.images);
    const spinner = useSelector(state=>state.gallery_state.spinner);
    let [title, setTitle] = useState('Images title');
    let [currentImage, setCurrentImage] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(images.length===0){
            dispatch(getGalleryImagesAction({title_id: id}));
        }
        catalogs.forEach(item=>{
            if(id===item.id){
                setTitle(item.title);
            }
        })
    }, [])


    return(

        <div className={classes.wrapper}>
            {
                spinner?<SpinnerComponent/>:
                    <>
                        <Subtitle>{title}</Subtitle>
                        <div className={classes.content}>
                            {
                                images.length===0?
                                    "Картинок пока нету":
                                    <>
                                    {
                                        images.map((item, index)=>{
                                            return(
                                                <ImageCard clickHandler={setCurrentImage} url={item.url} key={index}/>
                                            )
                                        })
                                    }
                                    </>
                            }
                        </div>
                        {
                            currentImage?
                                <div className={classes.current_image_wrapper} onClick={()=>setCurrentImage(null)}>
                                    <img src={currentImage?currentImage:''} alt=""/>
                                </div>:
                                null
                        }
                    </>
            }
        </div>
    )
}

export default ImagesOfCatalog;