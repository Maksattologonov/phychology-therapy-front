import React, {useEffect, useState} from "react";
import classes from "./userAccountStyle.module.scss";
import UserInfoForm from "../AccountComponents/Content/ProfileUpdate/UserInfoForm";
import {useDispatch, useSelector} from "react-redux";
import {userLogOut} from "../../../../redux/actions/userActions";
import {useNavigate} from "react-router-dom";
import UserMenuLink from "../AccountComponents/Menu/MenuLink";
import {FaUser} from "react-icons/fa";
import {GiCardExchange} from "react-icons/gi";
import {AiOutlineUnorderedList, AiFillSetting, AiOutlineLogout} from "react-icons/ai";
import Profile from "../AccountComponents/Content/Profile/Profile";
import LogOut from "../AccountComponents/Content/LogOut";
import MyForums from "../AccountComponents/Content/Forums/MyForums";
import Appointments from "../AccountComponents/Content/Appointments/Appointments";

function UserAccountPage(){

    const user_info = useSelector(state=>state.user_info);
    const [menuLinks, setMenuLinks] = useState([
        {id:0, text: 'Profile', icon: <FaUser/>, isActive: true, content: <Profile key={Math.random()} />},
        {id:1, text: 'Profile change', icon: <GiCardExchange/>, isActive: false, content: <UserInfoForm key={Math.random()}/>},
        {id:2, text: 'Мои форумы', icon: <AiOutlineUnorderedList/>, isActive: false, content: <MyForums key={Math.random()}/>},
        {id:3, text: 'Мои записи', icon: <AiFillSetting/>, isActive: false, content: <Appointments key={Math.random()}/> },
        {id:4, text: 'Logout', icon: <AiOutlineLogout/>, isActive: false, content: <LogOut handler={logOutHandler} key={Math.random()} />}
    ]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user_info.token){
            navigate('/auth/authorization')
        }
        if(user_info.role!==3){
            navigate('/user');
        }
    }, [])

    function logOutHandler(){
        dispatch(userLogOut());
        navigate('/');
    }

    function menuLinkHandler(id){
        setMenuLinks(prevState=>{
            return prevState.map((item, index)=>{
                if(id===item.id){
                    item.isActive = true
                    return item;
                }else{
                    item.isActive = false
                    return item;
                }
            })
        })
    }

    return(
        <div className={classes.user_wrapper}>
            <div className={classes.left_block}>
                <div className={classes.user}>
                    <h3>{user_info.first_name}</h3>
                    {/*<h3>{user_info.last_name}</h3>*/}
                </div>
                <div className={classes.user_menu_wrapper}>
                    {
                        menuLinks.map((item, index)=>{
                            return(
                                <UserMenuLink
                                    clickHandler={menuLinkHandler}
                                    id={index}
                                    text={item.text}
                                    icon={item.icon}
                                    isAcctive={item.isActive}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes.right_block}>
                {
                    menuLinks.map((item, index)=>{
                        if(item.isActive){
                            return item.content;
                        }
                    })
                }
            </div>
            {/*<div className={classes.chatting_block}>*/}
            {/*    Chatting*/}
            {/*</div>*/}
        </div>
    )
}

export default UserAccountPage;