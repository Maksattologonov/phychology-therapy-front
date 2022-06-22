import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 6px;
  border: 1px solid #a0d5fd;
  background-color: #d3e2fa;
`
const FormBlock = styled.form`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-color: #ffffff;
  border: 1px solid #a0d5fd;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
`
 const Label = styled.div`
   width: 100%;
   margin-bottom: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 20px;
   color: #0D2D62;
 `


export default function Form(props){

    return(
        <Wrapper style={{width: props.width}}>
            <FormBlock>
                <Label>{props.title}</Label>
                {props.children}
            </FormBlock>
        </Wrapper>
    )
}