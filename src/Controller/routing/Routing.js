import React from "react";
import MainPageComponent from "../../Container/MainContainer/MainPageComponent";
import {publicRoutes, authRoutes} from "../routes/Routes";
import {Route, Routes} from "react-router-dom";
import AuthPageComponent from "../../Container/AuthContainer/AuthPageComponent";

export default function Routing(){
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
                authRoutes.map((item, index)=>{
                    return(
                        <Route exact={item.exact} path={item.url} element={<AuthPageComponent contentType={item.type} />} key={index}/>
                    )
                })
            }
            <Route  path="*" element={<>404</>}/>
        </Routes>
    )

}

