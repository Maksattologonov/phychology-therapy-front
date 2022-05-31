import React from "react";
import Dashboard from "admin_panel/components/dashboards/mainDashboard/Dashboard";
import Header from "admin_panel/components/Header/Header";
import MainWrapper from "admin_panel/components/common/MainWrapper";
import Footer from "admin_panel/components/Footer/Footer";
import ContentWrapper from "admin_panel/components/common/ContentWrapper";
import SubDashboard from "admin_panel/components/dashboards/subDashboard/SubDashboard";
import SDButton from "admin_panel/components/dashboards/subDashboard/SDButton";

export default function Profile(props){

    return(
        <MainWrapper>
            <Header/>
            <Dashboard/>
            <ContentWrapper>
                <SubDashboard>
                    <SDButton type="d" color="#c82333" clickHandler={()=>{console.log("hi")}}/>
                    <SDButton type="u" color="#E0A800"  clickHandler={()=>{console.log("hi")}}/>
                    <SDButton type="c" color="#218838"  clickHandler={()=>{console.log("hi")}}/>
                </SubDashboard>

            </ContentWrapper>
            <Footer/>
        </MainWrapper>
    )
}