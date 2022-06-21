import React, {useState} from "react";
import Dashboard from "admin_panel/components/dashboards/mainDashboard/Dashboard";
import Header from "admin_panel/components/Header/Header";
import MainWrapper from "admin_panel/components/common/MainWrapper";
import Footer from "admin_panel/components/Footer/Footer";
import ContentWrapper from "admin_panel/components/common/ContentWrapper";
import SubDashboard from "admin_panel/components/dashboards/subDashboard/SubDashboard";
import SubMenuButton from "admin_panel/components/common/SubMenuButton";

const CATALOGS = 'CATALOGS';
const FORUMS = 'FORUMS';

export default function Forums(props){

    let [subMenu, setSubMenu] = useState({forums: false, catalogs: true});

    function subMenuHandler(type){
        if(type===CATALOGS){
            setSubMenu({catalogs: true, forums: false});
        }else if(type===FORUMS){
            setSubMenu({catalogs: false, forums: true});
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
                    <SubMenuButton active={subMenu.images} clickHandler={subMenuHandler} type={FORUMS}>
                        Форумы
                    </SubMenuButton>
                </SubDashboard>
            </ContentWrapper>
            <Footer/>
        </MainWrapper>
    )
}