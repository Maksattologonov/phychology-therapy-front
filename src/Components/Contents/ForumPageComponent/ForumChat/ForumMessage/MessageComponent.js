import React, {useState} from "react";
import classes from "./MessageStyle.module.scss";
import user_icon from '../../../../../images/forum_chat_def_user_icon.jpg'
import {TiDeleteOutline} from "react-icons/ti";
import {AiOutlineEdit} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {deleteForumComment, updateForumComment} from "../../../../../redux/actions/forumActions";
import {toast} from "react-toastify";

function MessageComponent(props){
    const auth = useSelector(state=>state.authorization_state);
    const user_id = useSelector(state=>state.user_state.id);
    const dispatch = useDispatch();
    let [editComment, setEditComment] = useState({
        isEdit: false,
        comment: ''
    });

    function editHandler(e){
        e.preventDefault();
        if(editComment.comment.length!==0){
            if(editComment.comment!==props.data.description){
                toast.info('Запрос отправлен, ждите!');
                dispatch(updateForumComment({
                    token: auth.token,
                    comment_id: props.data.id,
                    description: editComment.comment
                }))
                setEditComment({isEdit: false, comment: ''});
            }else{
                setEditComment({isEdit: false, comment: ''});
            }
        }
    }

    function deleteHandler(){
        dispatch(deleteForumComment({token: auth.token,id: props.data.id}));
    }

    return(
        <div className={classes.message_wrapper}>
            <div className={classes.user}>
                <img src={user_icon} alt=""/>
                <span className={classes.nick_name}>{props.data.anonymous_name}</span>
            </div>
            <div className={classes.text}>
                {props.data.description}
            </div>
            {
                auth.authentication&&props.m?
                        props.data.user_id===user_id?
                            <>
                                <div className={classes.control_wrapper}>
                                    <AiOutlineEdit onClick={()=>{setEditComment(prevState => {return {comment: props.data.description, isEdit: true}})}}/>
                                    {/*<TiDeleteOutline onClick={deleteHandler}/>*/}
                                </div>

                                {
                                    editComment.isEdit?
                                        <form className={classes.form}>
                                            <textarea
                                                className={classes.textarea}
                                                value={editComment.comment}
                                                name="text"
                                                id="text"
                                                cols="15"
                                                rows="2"
                                                placeholder='Введите текст'
                                                onChange={(e)=>{setEditComment(prevState => {return{...prevState, comment: e.target.value}})}}
                                            />
                                            <div className={classes.but_wrap}>
                                                <button className={classes.cancel} onClick={()=>{setEditComment(prevState => {return{isEdit: false, comment: ''}})}}>
                                                    Отменить
                                                </button>
                                                <button className={classes.edit} onClick={editHandler}>
                                                    Изменить
                                                </button>
                                            </div>
                                        </form>
                                        :
                                        ''
                                }
                            </>
                        :''
                    :''
            }

        </div>
    )
}

export default MessageComponent;