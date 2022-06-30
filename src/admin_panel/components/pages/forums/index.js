import React, {useState} from "react";
import Dashboard from "admin_panel/components/dashboards/mainDashboard/Dashboard";
import Header from "admin_panel/components/Header/Header";
import MainWrapper from "admin_panel/components/common/MainWrapper";
import Footer from "admin_panel/components/Footer/Footer";
import ContentWrapper from "admin_panel/components/common/ContentWrapper";
import SubDashboard from "admin_panel/components/dashboards/subDashboard/SubDashboard";
import SubMenuButton from "admin_panel/components/common/SubMenuButton";
import ForumCatalogs from "./forumCatalogs";
import CreateForumCatalog from "./createForumCatalog";

const CATALOGS = 'CATALOGS';
const ADD_CATALOG = 'ADD_CATALOG';


export default function Forums(props){

    let [subMenu, setSubMenu] = useState({catalogs: true, add_catalog: false});

    function subMenuHandler(type){
        if(type===CATALOGS){
            setSubMenu({catalogs: true, add_catalog: false});
        }else if(type===ADD_CATALOG){
            setSubMenu({catalogs: false, add_catalog: true});
        }
    }

    return(
        <MainWrapper>
            <Header/>
            <Dashboard/>
            <ContentWrapper>
                <SubDashboard>
                    <SubMenuButton active={subMenu.catalogs} clickHandler={subMenuHandler} type={CATALOGS}>
                        Каталоги
                    </SubMenuButton>
                    <SubMenuButton active={subMenu.add_catalog} clickHandler={subMenuHandler} type={ADD_CATALOG}>
                        Добавить каталог
                    </SubMenuButton>
                </SubDashboard>

                {
                    subMenu.catalogs?
                        <ForumCatalogs/>
                        :
                        subMenu.add_catalog?
                            <CreateForumCatalog/>
                            :null
                }

            </ContentWrapper>
            <Footer/>
        </MainWrapper>
    )
}