import React, {useEffect} from "react";
import classes from "./GalleryPageStyle.module.scss";
import Subtitle from "../../Common/Subtitle/SubtitleComponent";
import CatalogCard from "../../Common/CatalogCard/CatalogCard";
import {BsImages} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import SpinnerComponent from "../../Spinner/SpinnerComponent";
import {getGalleryCatalogs, resetGalleryImages} from "../../../redux/actions/galleryActions";

function GalleryPage(){

    const catalogs = useSelector(state=>state.gallery_state.catalogs);
    const spinner = useSelector(state=>state.gallery_state.spinner);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(resetGalleryImages());
        if(catalogs.length===0){
            dispatch(getGalleryCatalogs());
        }
    }, [])




    return(
        <div className={classes.wrapper}>
            <Subtitle>
                Галерея
            </Subtitle>
            <div className={classes.content}>
                {
                    spinner? <SpinnerComponent/> :
                        catalogs.length===0?'Каталогов еще нету':
                            catalogs.map(item=>{
                                return(
                                    <CatalogCard key={item.id} link={`/gallery/catalog/${item.id}/images`} icon={<BsImages/>}>
                                        {item.title}
                                    </CatalogCard>
                                )
                            })
                }
            </div>
        </div>
    )
}

export default GalleryPage;