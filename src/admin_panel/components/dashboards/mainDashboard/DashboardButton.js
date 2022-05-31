import React from "react";
import styled from "styled-components";
import {MdOutlineArrowForwardIos} from "react-icons/md";

const Left = styled.div`
  width: 15%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(0,0,0,0.3);   
`
const Right = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;  
`

export default function DashboardButton(props){

    const Wrapper = styled.div`
      text-emphasis-style: none;
      color: ${props.isAcctive?'#0e56f5':'#1D2130'};
      display: flex;
      border-radius: 3px;
      overflow: hidden;
      background: ${props.isAcctive?'rgba(0,0,0,0.1)':'rgba(0,0,0,0.2)'};
      margin-bottom: 8px;
      cursor: pointer;
      transition: 300ms ease-in-out;
      &:hover{
        background: rgba(0,0,0,0.15);
      }
    `
    return(
        <Wrapper onClick={()=>{
            props.clickHandler(props.path);
        }}>
            <Left >
                {props.icon}
            </Left>
            <Right>
                {props.text}
                <MdOutlineArrowForwardIos/>
            </Right>
        </Wrapper>
    )
}