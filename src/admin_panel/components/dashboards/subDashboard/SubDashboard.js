import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0 50px;
`

export default function SubDashboard(props){

    return(
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}