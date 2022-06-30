import React from "react";
import styled from "styled-components";

export default function SubMenuButton(props){
    const Wrapper = styled.div`
        position: relative;
        padding: 5px 10px;
        margin-left: 10px;
        background-color: #ffffff;
        transition: 300ms ease-in-out;
        border-radius: 3px;
        border: ${props.active?'1px solid #a3c8e5':'1px solid #b6b7b7'};
        box-shadow: ${props.active?'inset 0 0 3px #8ebce3':'inset 0 0 3px #b6b7b7'};
        color: ${props.active?'#0D2D62':'#4d4d4d'};
        cursor: ${props.active?'not-allowed':'pointer'};
        &:hover {
        color: #0D2D62;
        border: 1px solid #a3c8e5;
        box-shadow: inset 0 0 3px #8ebce3;
        }
    `
    return(
        <Wrapper onClick={()=>props.clickHandler(props.type)}>
            {props.children}
        </Wrapper>
    )
}