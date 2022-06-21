import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
`
const Label = styled.label`
  width: 100%;
  margin-bottom: 5px;
  color: #3f3f3f;
  font-size: 16px;
`

export default function Input(props){

    const CustomInput = styled.input`
      width: 100%;
      color: ${props.filled ? "#3f3f3f" : "#8d8d8d"};
      font-size: 16px;
      outline: none;
      border: 1px solid ${props.filled ? "#98d0f6" : "#fd5a5a"};
      box-shadow: inset 0 0 4px ${props.filled ? "#98d0f6" : "#fd5a5a"};
      padding: 4px 5px;
      transition: 300ms ease-in-out;
      border-radius: 3px;

      &:focus {
        color: #414141;
        box-shadow: inset 0 0 4px #98d0f6;
        border: 1px solid #98d0f6;
      }
    `

    return(
        <Wrapper>
            <Label>
                {props.label}
            </Label>
            <CustomInput
                type={props.type}
                value={props.value}
                onChange={(e)=>props.changeHandler(e, props.t)}
            />
        </Wrapper>
    )
}