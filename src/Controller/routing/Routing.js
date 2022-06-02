import React from "react";
import MainPageComponent from "../../Container/MainContainer/MainPageComponent";
import {publicRoutes, authRoutes, userRoutes} from "../routes/Routes";
import {admin_routes} from "../routes/admin_routes";
import { Route, Routes} from "react-router-dom";
import AuthPageComponent from "../../Container/AuthContainer/AuthPageComponent";
import {useSelector} from "react-redux";
import ErrorPage from "../../Components/ErrorPage404/ErrorPage";

export default function Routing(){

    const authentication = useSelector(state=>state.authorization_state.authentication);

    return(
        <Routes>
            {
                publicRoutes.map((item, index)=>{
                    return(
                        <Route exact={item.exact} path={item.url} element={<MainPageComponent contentType={item.type} />} key={index}/>
                    )
                })
            }

            {
                authentication?
                userRoutes.map((item, index)=>{
                    return(
                        <Route exact={item.exact} path={item.url} element={<MainPageComponent contentType={item.type} />} key={index}/>
                    )
                }): null
            }

            {
                authRoutes.map((item, index)=>{
                    return(
                        <Route exact={item.exact} path={item.url} element={<AuthPageComponent contentType={item.type} />} key={index}/>
                    )
                })
            }
            {
                admin_routes.map((item, index)=>{
                    return(
                        <Route exact={item.exact} path={item.path} element={item.component} key={index}/>
                    )
                })
            }

            <Route  path="*" element={<ErrorPage/>}/>
        </Routes>
    )

}

