import React, {useEffect} from "react";
import classes from "./FormChatStyle.module.scss";
import MessageComponent  from "./ForumMessage/MessageComponent";
import AddMessageComponent from "./AddMessageForum/AddMessageComponent";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getFormById} from "../../../../redux/actions/forumActions";
import SpinnerComponent from "../../../Spinner/SpinnerComponent";

function FormChatComponent(props){

    const navigate = useNavigate();
    const {id, index} = useParams();
    const dispatch = useDispatch();
    const forum_state = useSelector(state=>state.form_state);
    const auth_state = useSelector(state=>state.authorization_state);

    let myRef = React.useRef(null);

    useEffect(()=>{
        if(forum_state.forum_comments.length===0||forum_state.operation_success){
            dispatch(getFormById({
                id: id
            }))
        }
    }, [forum_state.operation_success]);

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
                    description: forum_state.forms[index].description
                }}
                m={false}
                key={index}
            />
            {
                forum_state.spinner?
                    <SpinnerComponent/>:
                    forum_state.forum_comments.length!==0?
                        forum_state.forum_comments.map((item,index)=>{
                            return(
                                <MessageComponent data={item} m={true} key={index}/>
                            )
                        })
                        :
                        'Комментариев пока нету'
            }
            {
                auth_state.authentication?
                    <AddMessageComponent forum_id={id} myRef={myRef}/>:''
            }
        </div>
    )
}

export default FormChatComponent;