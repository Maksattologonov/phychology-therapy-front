import React, {useState} from "react";
import Dashboard from "admin_panel/components/dashboards/mainDashboard/Dashboard";
import Header from "admin_panel/components/Header/Header";
import MainWrapper from "admin_panel/components/common/MainWrapper";
import Footer from "admin_panel/components/Footer/Footer";
import ContentWrapper from "admin_panel/components/common/ContentWrapper";
import SubDashboard from "admin_panel/components/dashboards/subDashboard/SubDashboard";
import SubMenuButton from "admin_panel/components/common/SubMenuButton";
import ContentMessage from "../../common/ContentMessage";
import GalleryCatalogs from "admin_panel/components/pages/gallery/GalleryCategories";
import CreateCategory from "./AddGalleryCategory";
import AddGalleryIMage from "./AddGalleryImage";

const CATEGORY = 'CATEGORY';
const CREATE_CATEGORY = 'CREATE_CATEGORY';
const IMAGES = 'IMAGES';
const ADD_IMAGE = 'ADD_IMAGE';

export default function Gallery(props){

    let [subMenu, setSubMenu] = useState({
        category: true,
        images: false,
        create_category: false,
        add_image: false
    });

    function subMenuHandler(type){
        if(type===CATEGORY){
            setSubMenu({category: true, images: false, create_category: false, add_image: false});
        }else if(type===IMAGES){
            setSubMenu({category: false, images: true, create_category: false, add_image: false});
        }
        else if(type===CREATE_CATEGORY){
            setSubMenu({category: false, images: false, create_category: true, add_image: false});
        }else if(type===ADD_IMAGE){
            setSubMenu({category: false, images: false, create_category: true, add_image: true});
        }

    }

    return(
        <MainWrapper>
            <Header/>
            <Dashboard/>
            <ContentWrapper>
                <SubDashboard>
                    <SubMenuButton active={subMenu.category} clickHandler={subMenuHandler} type={CATEGORY}>
                        Категории
                    </SubMenuButton>
                    <SubMenuButton active={subMenu.create_category} clickHandler={subMenuHandler} type={CREATE_CATEGORY}>
                        Создать категории
                    </SubMenuButton>
                    <SubMenuButton active={subMenu.add_image} clickHandler={subMenuHandler} type={ADD_IMAGE}>
                        Добавить картинку
                    </SubMenuButton>
                </SubDashboard>

                {

                    subMenu.add_image?
                        <AddGalleryIMage/>
                        :
                        subMenu.category?
                            <GalleryCatalogs/>:
                            subMenu.images?
                                <ContentMessage>
                                    Этот раздел еще не реализовано
                                </ContentMessage>:
                                subMenu.create_category?
                                    <CreateCategory/>:
                                    <ContentMessage>
                                        У вас нет личных данных, как вы сюда попали ?
                                    </ContentMessage>

                }

            </ContentWrapper>
            <Footer/>
        </MainWrapper>
    )
}