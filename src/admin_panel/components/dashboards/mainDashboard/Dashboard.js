import React, {useEffect, useState} from "react";
import styled from "styled-components";
import DashboardButton from "admin_panel/components/dashboards/mainDashboard/DashboardButton";
import {FaUser, FaForumbee} from "react-icons/fa";
import {GrArticle} from "react-icons/gr";
import {FiUsers} from "react-icons/fi";
import {BsArchive, BsImages} from "react-icons/bs";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";

const Wrapper = styled.div` 
  width: 25%;
`
const Menu = styled.div`
  width: 100%;
  padding: 80px 0 80px 100px ;
  position: sticky;
`

export default function Dashboard(){

    useEffect(()=>{
        setMenuLinks(prevState=>{
            return prevState.map((item, index)=>{
                if(pathName===item.path){
                    item.isActive = true
                    return item;
                }else{
                    item.isActive = false
                    return item;
                }
            })
        })
    }, [])

    const [menuLinks, setMenuLinks] = useState([
        {path: '/admin/profile', text: "Профиль", icon: <FaUser/>, isActive: false},
        {path: '/admin/publications', text: "Публикации", icon: <GrArticle/>, isActive: false},
        {path: '/admin/gallery', text: "Галерея", icon: <BsImages/>, isActive: false},
        {path: '/admin/forums', text: "Форумы", icon: <FaForumbee/>, isActive: false},
        {path: '/admin/employee', text: "Сотрудники", icon: <FiUsers/>, isActive: false},
        {path: '/admin/users', text: "Пользователи", icon: <FiUsers/>, isActive: false},
        {path: '/admin/archive', text: "Архив", icon: <BsArchive/>, isActive: false}
    ]);

    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;

    function menuLinkHandler(path){
        navigate(path);
    }

    return(
        <Wrapper>
            <Menu>
                {
                    menuLinks.map((item, index)=>{
                        return(
                            <DashboardButton
                                clickHandler={menuLinkHandler}
                                path={item.path}
                                text={item.text}
                                icon={item.icon}
                                isAcctive={item.isActive}
                                key={index}
                            />
                        )
                    })
                }
            </Menu>
        </Wrapper>
    )
}