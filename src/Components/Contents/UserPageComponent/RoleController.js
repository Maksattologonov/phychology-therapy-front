import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getUserInfo} from "../../../redux/actions/userActions";
import SpinnerComponent from "../../Spinner/SpinnerComponent";


export default function RoleController(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector(state=>state.user_info);

    useEffect(()=> {
        if(state.token&&!state.role){
            dispatch(getUserInfo(state.token));
        }
        if(state.role){
            if(state.role===3){
                navigate('/user/account');
            }else if(state.role===2){
                navigate('/employee/account');
            }else if (state.role===1){
                navigate('/admin/profile');
            }
        }
    }, [state.role])

    return(
        <>
            <SpinnerComponent/>
        </>
    )
}