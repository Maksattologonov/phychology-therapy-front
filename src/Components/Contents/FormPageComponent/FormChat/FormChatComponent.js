import React, {useEffect} from "react";
import classes from "./FormChatStyle.module.scss";
import MessageComponent  from "./FormMessage/MessageComponent";
import AddMessageComponent from "./AddMessageForm/AddMessageComponent";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getFormById} from "../../../../redux/actions/formActions";
import SpinnerComponent from "../../../Spinner/SpinnerComponent";

function FormChatComponent(props){

    const navigate = useNavigate();
    const {id, index} = useParams();
    const dispatch = useDispatch();
    const form_state = useSelector(state=>state.form_state);
    const auth_state = useSelector(state=>state.authorization_state);

    let myRef = React.useRef(null);

    useEffect(()=>{
        if(form_state.forum_comments.length===0||form_state.operation_success){
            dispatch(getFormById({
                id: id
            }))
        }
    }, [form_state.operation_success]);

    function goBackHandler(){
        navigate("/form/forms");
    }

    return(
        <div className={classes.chat_wrapper}>
            <div className={classes.back}>
                <span onClick={goBackHandler}>{"<-назад"}</span>
            </div>
            <MessageComponent
                data={{
                    anonymous_name: 'Автор форума',
                    description: form_state.forms[index].description
                }}
                m={false}
                key={index}
            />
            {
                form_state.forum_comments.length!==0?
                    form_state.forum_comments.map((item,index)=>{
                        return(
                            <MessageComponent data={item} m={true} key={index}/>
                        )
                    })
                    :
                    <SpinnerComponent/>
            }
            {
                auth_state.authentication?
                    <AddMessageComponent forum_id={id} myRef={myRef}/>:''
            }
        </div>
    )
}

export default FormChatComponent;