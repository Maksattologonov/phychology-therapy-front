import React, {useState} from "react";
import Dashboard from "admin_panel/components/dashboards/mainDashboard/Dashboard";
import Header from "admin_panel/components/Header/Header";
import MainWrapper from "admin_panel/components/common/MainWrapper";
import Footer from "admin_panel/components/Footer/Footer";
import ContentWrapper from "admin_panel/components/common/ContentWrapper";
import SubDashboard from "admin_panel/components/dashboards/subDashboard/SubDashboard";
import SubMenuButton from "admin_panel/components/common/SubMenuButton";
import ProfileInfo from "admin_panel/components/pages/profile/profileInfo";
import ProfileUpdate from "admin_panel/components/pages/profile/profileUpdate";
import {useSelector} from "react-redux";
import ContentMessage from "admin_panel/components/common/ContentMessage";

const PROFILE = 'PROFILE';
const CHANGE_PROFILE = 'CHANGE_PROFILE';

export default function Profile(props){

    let [subMenu, setSubMenu] = useState({profile: true, change_profile: false});
    let user_info = useSelector(state=>state.user_info);

    function subMenuHandler(type){
        if(type===PROFILE){
            setSubMenu({profile: true, change_profile: false});
        }else if(type===CHANGE_PROFILE){
            setSubMenu({profile: false, change_profile: true});
        }
    }

    return(
        <MainWrapper>
            <Header/>
            <Dashboard/>
            <ContentWrapper>
                <SubDashboard>
                    <SubMenuButton active={subMenu.profile} clickHandler={subMenuHandler} type={PROFILE}>
                        Личные данные
                    </SubMenuButton>
                    <SubMenuButton active={subMenu.change_profile} clickHandler={subMenuHandler} type={CHANGE_PROFILE}>
                        Изменить данные
                    </SubMenuButton>
                </SubDashboard>

                {
                    subMenu.profile?
                        <ProfileInfo
                            // name={user_info.first_name + ' '+ user_info.last_name}
                            // email={user_info.email}
                            name="Amankul Altynbek uulu"
                            email="1804.01025@manas.edu.kg"
                        />:
                            subMenu.change_profile?
                                <ProfileUpdate
                                    first_name={''}
                                    last_name={''}
                                />:
                                    <ContentMessage>
                                         У вас нет личных данных, как вы сюда попали ?
                                    </ContentMessage>

                }

            </ContentWrapper>
            <Footer/>
        </MainWrapper>
    )
}