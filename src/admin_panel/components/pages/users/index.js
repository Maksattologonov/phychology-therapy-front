import React, {useEffect} from "react";
import Dashboard from "admin_panel/components/dashboards/mainDashboard/Dashboard";
import Header from "admin_panel/components/Header/Header";
import MainWrapper from "admin_panel/components/common/MainWrapper";
import ContentWrapper from "../../common/ContentWrapper";
import Footer from "../../Footer/Footer";
import SpinnerComponent from "../../../../Components/Spinner/SpinnerComponent";
import ItemCard from "../../common/ItemCard";
import {AiFillLock, AiFillUnlock} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {getUsersAction} from "../../../../redux/actions/userActions";


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0;
`

export default function Users(props){
    const token = useSelector(state=>state.user_info.token);
    const users = useSelector(state=>state.user_state.users);
    const spinner = useSelector(state=>state.user_state.spinner);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(users.length===0){
            dispatch(getUsersAction({token: token}));
        }
    }, [])

    function userLock(){
        console.log('lock');
    }

    function userUnlock(){
        console.log('unlock');
    }

    return(
        <MainWrapper>
            <Header/>
            <Dashboard/>
            <ContentWrapper>
                <Wrapper>
                    {
                        spinner?
                            <SpinnerComponent/>
                            :
                            users.length!==0?
                                users.map((item, index)=>{
                                    return(
                                        <ItemCard
                                            topBar={[
                                                {icon:<AiFillLock/>, handler: userLock},
                                                // {icon:<AiFillUnlock/>, handler: userUnlock}
                                            ]}
                                            id={item.id}
                                            text={item.name+' '+item.last_name}
                                            index={index}
                                            key={index}
                                        />
                                    )
                                })
                                :
                                'Пока статей нету'
                    }
                </Wrapper>
            </ContentWrapper>
            <Footer/>
        </MainWrapper>
    )
}