import React, {useState} from "react";
import Dashboard from "admin_panel/components/dashboards/mainDashboard/Dashboard";
import Header from "admin_panel/components/Header/Header";
import MainWrapper from "admin_panel/components/common/MainWrapper";
import ContentWrapper from "../../common/ContentWrapper";
import SubDashboard from "../../dashboards/subDashboard/SubDashboard";
import SubMenuButton from "../../common/SubMenuButton";
import Footer from "../../Footer/Footer";
import ContentMessage from "../../common/ContentMessage";
import EmployeesList from "./employees";
import AddEmployee from "./add_employee";

const EMPLOYEES = 'CATEGORY';
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export default function Employees(props){

    let [subMenu, setSubMenu] = useState({employees: true, add_employee: false});

    function subMenuHandler(type){
        if(type===EMPLOYEES){
            setSubMenu({employees: true, add_employee: false});
        }else if(type===ADD_EMPLOYEE){
            setSubMenu({employees: false, add_employee: true});
        }
    }

    return(
        <MainWrapper>
            <Header/>
            <Dashboard/>
            <ContentWrapper>
                <SubDashboard>
                    <SubMenuButton active={subMenu.employees} clickHandler={subMenuHandler} type={EMPLOYEES}>
                        Сотрудники
                    </SubMenuButton>
                    <SubMenuButton active={subMenu.add_employee} clickHandler={subMenuHandler} type={ADD_EMPLOYEE}>
                        Добавить сотрудника
                    </SubMenuButton>
                </SubDashboard>
                {
                    subMenu.employees?
                        <EmployeesList/>:
                        subMenu.add_employee?
                            <AddEmployee/>:
                            <ContentMessage>
                                У вас нет личных данных, как вы сюда попали ?
                            </ContentMessage>

                }
            </ContentWrapper>
            <Footer/>
        </MainWrapper>
    )
}