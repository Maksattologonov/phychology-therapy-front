import React, {useState} from "react";
import Dashboard from "admin_panel/components/dashboards/mainDashboard/Dashboard";
import Header from "admin_panel/components/Header/Header";
import MainWrapper from "admin_panel/components/common/MainWrapper";
import ContentWrapper from "admin_panel/components/common/ContentWrapper";
import SubDashboard from "admin_panel/components/dashboards/subDashboard/SubDashboard";
import SubMenuButton from "admin_panel/components/common/SubMenuButton";
import Footer from "admin_panel/components/Footer/Footer";
import ContentMessage from "admin_panel/components/common/ContentMessage";
import PublicationsList from "admin_panel/components/pages/publications/publicationsList";
import PublicationCreate from "./publicationCreate";

const PUBLICATIONS = 'PUBLICATIONS';
const CREATE_PUBLICATION = 'CREATE_PUBLICATION';

export default function Publications(props){

    let [subMenu, setSubMenu] = useState({publications: true, create_publication: false});

    function subMenuHandler(type){
        if(type===PUBLICATIONS){
            setSubMenu({publications: true, create_publication: false});
        }else if(type===CREATE_PUBLICATION){
            setSubMenu({publications: false, create_publication: true});
        }
    }

    return(
        <MainWrapper>
            <Header/>
            <Dashboard/>
            <ContentWrapper>
                <SubDashboard>
                    <SubMenuButton active={subMenu.publications} clickHandler={subMenuHandler} type={PUBLICATIONS}>
                        Публикации
                    </SubMenuButton>
                    <SubMenuButton active={subMenu.create_publication} clickHandler={subMenuHandler} type={CREATE_PUBLICATION}>
                        Создать статью
                    </SubMenuButton>
                </SubDashboard>

                {
                    subMenu.publications?
                        <PublicationsList/>:
                        subMenu.create_publication?
                            <PublicationCreate/>:
                            <ContentMessage>
                                У вас нет личных данных, как вы сюда попали ?
                            </ContentMessage>

                }

            </ContentWrapper>
            <Footer/>
        </MainWrapper>
    )
}