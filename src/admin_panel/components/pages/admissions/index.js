import React from "react";
import Dashboard from "admin_panel/components/dashboards/mainDashboard/Dashboard";
import Header from "admin_panel/components/Header/Header";
import MainWrapper from "admin_panel/components/common/MainWrapper";

export default function Admissions(props){

    return(
        <MainWrapper>
            <Header/>
            <Dashboard/>
            <div style={{height: "5000px"}}>

            </div>
        </MainWrapper>
    )
}