import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  background-color: #dadada;
`
const AdminPageIcon = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #B80924;
  span{
    color: #0D2D62;
  }
`
const LogOut = styled.span`
  font-size: 16px;
  cursor: pointer;
  color: #1D2130;
  transform-origin: center;
  transition: 500ms ease-in-out;
  border-bottom: 1px solid #dadada;

  &:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
`


export default function Header(props){

    return(
        <Wrapper>
            <AdminPageIcon>
                Admin <span>panel</span>
            </AdminPageIcon>
            <LogOut>
                Выйти
            </LogOut>
        </Wrapper>
    )
}