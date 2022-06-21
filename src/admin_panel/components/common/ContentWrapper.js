import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 75%;
  position: relative;
  padding: 20px 100px 20px 50px;
`

export default function ContentWrapper(props){

    return(
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}