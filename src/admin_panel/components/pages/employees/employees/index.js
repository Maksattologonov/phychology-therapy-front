import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ItemCard from "admin_panel/components/common/ItemCard";
import {AiFillLock, AiFillUnlock} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import SpinnerComponent from "../../../../../Components/Spinner/SpinnerComponent";
import {getEmployeesAction} from "../../../../../redux/actions/userActions";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export default function EmployeesList(props){

    const employees = useSelector(state=>state.user_state.employees);
    const spinner = useSelector(state=>state.user_state.spinner);
    const token = useSelector(state=>state.user_info.token);
    const dispatch = useDispatch()

    useEffect(()=>{
        if(employees.length===0){
            dispatch(getEmployeesAction({token: token}));
        }
    }, [])

    function lockHandler(id){
        // dispatch(deletePublication({
        //     id: id,
        //     token: token
        // }))
    }

    return(
        <Wrapper>
            {
                spinner?
                    <SpinnerComponent/>
                    :
                    employees.length!==0?
                        employees.map((item, index)=>{
                            return(
                                <ItemCard
                                    topBar={[
                                        {icon:<AiFillLock/>, handler: lockHandler},
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
    )
}