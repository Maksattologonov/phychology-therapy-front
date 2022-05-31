import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-width: 1266px;
`

export default function MainWrapper(props){

    return(
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}