import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 75%;
  position: relative;
  padding: 30px 50px 30px 20px;
`

export default function ContentWrapper(props){

    return(
        <Wrapper>
            {props.children}
            sdf
        </Wrapper>
    )
}