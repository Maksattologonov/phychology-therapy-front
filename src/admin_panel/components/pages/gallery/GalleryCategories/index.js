import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ItemCard from "admin_panel/components/common/ItemCard";
import {AiFillDelete} from "react-icons/ai";
import {MdChangeCircle} from "react-icons/md";
import {BsImages} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import SpinnerComponent from "../../../../../Components/Spinner/SpinnerComponent";
import CategoryUpdate from "admin_panel/components/pages/gallery/GalleryCategories/categoryUpdate";
import {
    deleteGalleryCatalogAction,
    getGalleryCatalogsAction, resetGalleryImages
} from "../../../../../redux/actions/galleryActions";
import CategoryImages from "./CategoryImages";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export default function GalleryCatalogs(props){

    const catalogs = useSelector(state=>state.gallery_state.catalogs);
    const spinner = useSelector(state=>state.gallery_state.spinner);
    const token = useSelector(state=>state.user_info.token);
    const dispatch = useDispatch()
    const [category, setCategory] = useState({
        id: null,
        update: false,
        showImages: false
    })

    useEffect(()=>{
        dispatch(resetGalleryImages());
        if(catalogs.length===0){
            dispatch(getGalleryCatalogsAction());
        }
    }, [category.showImages])

    function deleteHandler(id){
        dispatch(deleteGalleryCatalogAction({
            id: id,
            token: token
        }))
    }

    function redirectUpdatePage(id){
        setCategory(prevState => {
            return{id: id, update: true, showImages: false}
        })
    }

    function showImagesInCategory(id){
        setCategory(prevState => {
            return{id: id, update: false, showImages: true}
        })
    }

    function closePage(id){
        setCategory(prevState => {
            return{id: null, update: false, showImages: false}
        })
    }

    return(
        <Wrapper>
            {
                category.update?
                    <CategoryUpdate id={category.id} closePage={closePage}/>:
                    category.showImages?
                        <CategoryImages id={category.id} closePage={closePage}/>
                        :
                    spinner?
                        <SpinnerComponent/>
                        :
                        catalogs.length!==0?
                            catalogs.map((item, index)=>{
                                return(
                                    <ItemCard
                                        topBar={[
                                            {icon:<AiFillDelete/>, handler: deleteHandler},
                                            {icon:<MdChangeCircle/>, handler: redirectUpdatePage},
                                            {icon: <BsImages/>, handler: showImagesInCategory}
                                        ]}
                                        id={item.id}
                                        text={item.title}
                                        index={index}
                                        key={index}
                                    />
                                )
                            })
                            :
                            'Пока статей нету'
            }

        </Wrapper>
    )
}