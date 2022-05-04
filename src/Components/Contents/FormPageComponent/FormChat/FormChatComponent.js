import React, {useEffect} from "react";
import classes from "./FormChatStyle.module.scss";
import MessageComponent  from "./FormMessage/MessageComponent";
import AddMessageComponent from "./AddMessageForm/AddMessageComponent";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getFormById} from "../../../../redux/actions/formActions";

function FormChatComponent(props){

    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();
    const state = useSelector(state=>state.form_state);

    useEffect(()=>{
        if(state.forum_comments.length===0){
            dispatch(getFormById({
                id: id
            }))
        }
    }, []);

    function goBackHandler(){
        navigate("/form/forms");
    }

    return(
        <div className={classes.chat_wrapper}>
            <div className={classes.back}>
                <span onClick={goBackHandler}>{"<-назад"}</span>
            </div>
            <MessageComponent
                main={true}
            />
            <MessageComponent/>
            <MessageComponent/>
            <MessageComponent/>

            <AddMessageComponent/>
        </div>
    )
}

export default FormChatComponent;