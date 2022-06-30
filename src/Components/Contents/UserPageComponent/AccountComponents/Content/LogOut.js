import React from "react";

export default function LogOut(props){

    let style_but = {
        margin: '20px 0',
        padding: "6px 16px",
        backgroundColor: '#b91616',
        cursor: 'pointer',
        fontSize: '16px',
        border: 'none',
        color: 'white',
        borderRadius: '3px',
        justifySelf: 'center'
    }
    let style_p = {
        width: '100%',
        marginBottom:'10px',
        color: "#ec4b36",
        textAlign: 'center',
    }
    let style_wrapper = {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }

    return(
        <div style={style_wrapper}>
            <p style={style_p}>Вы действительно хотите выйти ?</p>
            <button style={style_but} onClick={props.handler}>
                Да
            </button>
        </div>
    )
}