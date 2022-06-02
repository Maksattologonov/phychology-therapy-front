import React from "react";

export default function LogOut(props){

    let style = {
        margin: '100px 33%',
        padding: "8px 20px",
        backgroundColor: '#DA3928',
        cursor: 'pointer',
        fontSize: '16px',
        border: 'none',
        color: 'white',
        borderRadius: '5px'
    }

    return(
        <>
            <button style={style} onClick={props.handler}>
                Выйти из аккаунта
            </button>
        </>
    )
}