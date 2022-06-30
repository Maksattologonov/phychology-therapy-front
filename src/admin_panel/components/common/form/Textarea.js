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

const CustomTextArea = styled.textarea`
      width: 100%;
      font-size: 16px;
      outline: none;
      color: #8d8d8d;
      border: 1px solid #fd5a5a;
      box-shadow: inset 0 0 4px #fd5a5a;
      padding: 5px;
      transition: 300ms ease-in-out;
      border-radius: 3px;

      &:focus {
        color: #414141;
        box-shadow: inset 0 0 4px #98d0f6;
        border: 1px solid #98d0f6;
      }
    `

const filled = {
    color:"#3f3f3f",
    border: "1px solid #98d0f6",
    boxShadow: "inset 0 0 4px #98d0f6"
}

export default function Textarea(props){

    return(
        <Wrapper>
            <Label>
                {props.label}
            </Label>
            <CustomTextArea
                value={props.value}
                cols={30}
                rows={5}
                onChange={(e)=>props.changeHandler(e, props.t)}
                style={props.filled?filled:null}
            />
        </Wrapper>
    )
}