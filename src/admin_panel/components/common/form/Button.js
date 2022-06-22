import React from "react";
import styled from "styled-components";

export default function Button(props){

    const ButtonBlock = styled.button`
      padding: 6px 12px;
      border: none;
      font-size: 16px;
      color: ${props.enabled?"#ffffff":"#cecece"};
      background-color: ${props.enabled?"#0D2D62":"#797979"};
      cursor: ${props.enabled?"pointer": "not-allowed"};
      border-radius: 3px;
    `

    return(
        <ButtonBlock onClick={props.sendHandler} disabled={!props.enabled}>
            {props.children}
        </ButtonBlock>
    )
}