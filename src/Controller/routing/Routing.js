import React from "react";
import MainPageComponent from "../../Container/MainPageComponent";
import {publicRoutes} from "../routes/Routes";
import {Route, Routes} from "react-router-dom";

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
            <Route  path="*" element={<>404</>}/>
        </Routes>
    )

}

