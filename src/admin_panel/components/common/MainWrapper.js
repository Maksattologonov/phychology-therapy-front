import React from "react";
import styled from "styled-components";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-width: 1266px;
`

export default function MainWrapper(props){

    return(
        <Wrapper>
            {props.children}

            <ToastContainer
                autoClose={15000}
            />
        </Wrapper>
    )
}