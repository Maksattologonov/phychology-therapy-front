import React, {useEffect, useState} from "react";
import classes from "./UserAccountStyle.module.scss";
import UserInfoForm from "./accContent/UserInfoForm";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo, userLogOut} from "../../../redux/actions/userActions";
import {useNavigate} from "react-router-dom";
import UserMenuLink from "./userMenuComponent/MenuLink";
import {FaUser} from "react-icons/fa";
import {GiCardExchange} from "react-icons/gi";
import {AiOutlineUnorderedList, AiFillSetting, AiOutlineLogout} from "react-icons/ai";
import Profile from "./accContent/Profile";
import LogOut from "./accContent/LogOut";
import MyForums from "./accContent/MyForums/MyForums";

function UserAccountPage(){

    const state = useSelector(state=>state.user_state);
    const token = useSelector(state=>state.authorization_state.token);
    const [menuLinks, setMenuLinks] = useState([
        {id:0, text: 'Profile', icon: <FaUser/>, isActive: true, content: <Profile key={Math.random()} />},
        {id:1, text: 'Profile change', icon: <GiCardExchange/>, isActive: false, content: <UserInfoForm key={Math.random()}/>},
        {id:2, text: 'Мои форумы', icon: <AiOutlineUnorderedList/>, isActive: false, content: <MyForums key={Math.random()}/>},
        {id:3, text: 'Setting', icon: <AiFillSetting/>, isActive: false, content: 'Setting'},
        {id:4, text: 'Logout', icon: <AiOutlineLogout/>, isActive: false, content: <LogOut handler={logOutHandler} key={Math.random()} />}
    ]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(state.email.length===0){
            dispatch(getUserInfo(token));
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
                    {state.nick_name}
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
                <div className={classes.user_content}>
                    {
                        menuLinks.map((item, index)=>{
                            if(item.isActive){
                                return item.content;
                            }
                        })
                    }
                </div>
            </div>
            {/*<div className={classes.chatting_block}>*/}
            {/*    Chatting*/}
            {/*</div>*/}
        </div>
    )
}

export default UserAccountPage;