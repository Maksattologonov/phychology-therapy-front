import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  color: #3a3a3a;
  border: 1px solid #adabab;
  box-shadow: inset 0 0 4px #b0b0b0;
  transition: 300ms ease-in-out;
  display: flex;
  flex-wrap: wrap;
  border-radius: 3px;
  margin-bottom: 10px;

  &:hover {
    color: #0D2D62;
    box-shadow: inset 0 0 4px #98d0f6;
    border: 1px solid #98d0f6;
  }
`
const TopBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 5px;
  font-size: 18px;
`
const TopBarButton = styled.div`
  width: 18px;
  height: 18px;
  margin: 5px 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #B80924;
  transition: 300ms;
  &:hover{
    color: #0D2D62;
  }
`

const Content = styled.div`
  width: 100%;
  padding: 5px 10px 10px 10px;
  display: flex;

  span {
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    display: block;
    width: 95%;
    padding: 0 15px;
  }
`

export default function ItemCard(props){

    return(
        <Wrapper>
            <TopBar>
                {
                    props.topBar.map((item, index)=>{
                        return(
                            <TopBarButton onClick={()=>item.handler(props.id)} key={index}> {item.icon} </TopBarButton>
                        )
                    })
                }
            </TopBar>
            <Content>
                <span>
                    {props.index+1}
                </span>
                <p>
                    {props.text}
                </p>
            </Content>
        </Wrapper>
    )
}