import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
`
const Block = styled.div`
  width: 100%;
  margin-bottom: 15px;
  font-size: 18px;
  span{
    margin-left: 10px;
  }
  color: #1D2130;
`

export default function ProfileInfo(props){

    return(
        <Wrapper>
            <Block>
                <span> Ф.И.О: </span>
                <span>{props.name}</span>
            </Block>
            <Block>
                <span> Email: </span>
                <span>{props.email}</span>
            </Block>
        </Wrapper>
    )
}