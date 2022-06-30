import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #B80924;
  padding: 50px 0;
`

export default function ContentMessage(props){
    return(
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}