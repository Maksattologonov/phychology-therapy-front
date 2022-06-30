import React, {useEffect} from "react";
import styled from "styled-components";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-width: 1266px;
`

export default function MainWrapper(props){

    const token = useSelector(state=>state.user_info.token);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!token){
            navigate("/auth/authorization");
        }
    }, [token])

    return(
        <Wrapper>
            {props.children}

            <ToastContainer
                autoClose={15000}
            />
        </Wrapper>
    )
}