import React, {useEffect, useState} from "react";
import classes from "./ForumChatStyle.module.scss";
import MessageComponent  from "./ForumMessage/MessageComponent";
import AddMessageComponent from "./AddMessageForum/AddMessageComponent";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import SpinnerComponent from "../../../Spinner/SpinnerComponent";
import {getForumCommentsAction} from "../../../../redux/actions/forumActions";
import Subtitle from "../../../Common/Subtitle/SubtitleComponent";

function ForumChatComponent(props){

    const navigate = useNavigate();
    const {forum_id} = useParams();
    const dispatch = useDispatch();
    const forums = useSelector(state=>state.forum_state.forums);
    const comments = useSelector(state=>state.forum_state.forum_comments);
    const spinner = useSelector(state=>state.forum_state.spinner);
    const token = useSelector(state=>state.user_info.token);
    let [forum_info, setForumInfo] = useState({
        forum_title: '',
        forum_description: ''
    })
    let myRef = React.useRef(null);

    useEffect(()=>{
        if(comments.length===0){
            dispatch(getForumCommentsAction({
                id: forum_id
            }))
        }
        forums.forEach(item=>{
            if(Number(forum_id)===Number(item.id)){
                setForumInfo({forum_title: item.title, forum_description: item.description})
            }
        })
    }, []);

    function goBackHandler(){
        navigate(-1);
    }

    return(
        <div className={classes.chat_wrapper}>
            <Subtitle>
                {forum_info.forum_title}
            </Subtitle>
            <div className={classes.back}>
                <span onClick={goBackHandler}>{"<-назад"}</span>
            </div>
            {
                spinner?
                    <SpinnerComponent/>:
                    comments.length!==0?
                        <>
                            <div className={classes.forum_description}>
                                <div className={classes.left}>
                                    Вопрос:
                                </div>
                                <div className={classes.right}>
                                    {forum_info.forum_description}
                                </div>
                            </div>
                            {
                                comments.map((item,index)=>{
                                    return(
                                        <MessageComponent data={item} m={true} key={index}/>
                                    )
                                })
                            }
                        </>
                        :
                        <p className={classes.p}>Комментариев пока нету</p>
            }
            {
                token?
                    <>
                        <br/>
                        <AddMessageComponent forum_id={forum_id} myRef={myRef}/>
                    </>
                :''
            }
        </div>
    )
}

export default ForumChatComponent;