import React from "react";
import styled from "styled-components";
import {AiFillDelete, AiOutlinePlusCircle} from "react-icons/ai";
import {GrUpdate} from "react-icons/gr";

export default function SDButton(props){
    let text = '';
    let icon = '';

    const Wrapper = styled.button`
      padding: 6px 12px;
      border: none;
      background-color: ${props.color};
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
      border-radius: 5px;
      cursor: pointer;
      div{
        margin-right: 5px;
      }
    `;


    switch (props.type){
        case 'd':
            text = 'Удалить';
            icon = <AiFillDelete/>
            break;
        case 'u':
            text = 'Обновить';
            icon = <GrUpdate/>
            break;
        case 'c':
            text = 'Создать';
            icon = <AiOutlinePlusCircle/>
            break;
    }

    return(
        <Wrapper onClick={props.clickHandler}>
            <div>{icon}</div>
            {text}
        </Wrapper>
    )
}