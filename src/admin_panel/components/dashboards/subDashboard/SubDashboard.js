import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
`

export default function SubDashboard(props){

    return(
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}