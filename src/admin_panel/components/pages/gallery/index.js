import React, {useState} from "react";
import Dashboard from "admin_panel/components/dashboards/mainDashboard/Dashboard";
import Header from "admin_panel/components/Header/Header";
import MainWrapper from "admin_panel/components/common/MainWrapper";
import Footer from "admin_panel/components/Footer/Footer";
import ContentWrapper from "admin_panel/components/common/ContentWrapper";
import SubDashboard from "admin_panel/components/dashboards/subDashboard/SubDashboard";
import SubMenuButton from "admin_panel/components/common/SubMenuButton";

const CATEGORY = 'CATEGORY';
const IMAGES = 'IMAGES';

export default function Gallery(props){

    let [subMenu, setSubMenu] = useState({images: false, category: true});

    function subMenuHandler(type){
        if(type===CATEGORY){
            setSubMenu({category: true, images: false});
        }else if(type===IMAGES){
            setSubMenu({category: false, images: true});
        }
    }

    return(
        <MainWrapper>
            <Header/>
            <Dashboard/>
            <ContentWrapper>
                <SubDashboard>
                    <SubMenuButton active={subMenu.category} clickHandler={subMenuHandler} type={CATEGORY}>
                        Каталоги
                    </SubMenuButton>
                    <SubMenuButton active={subMenu.images} clickHandler={subMenuHandler} type={IMAGES}>
                        Картинки
                    </SubMenuButton>
                </SubDashboard>
            </ContentWrapper>
            <Footer/>
        </MainWrapper>
    )
}