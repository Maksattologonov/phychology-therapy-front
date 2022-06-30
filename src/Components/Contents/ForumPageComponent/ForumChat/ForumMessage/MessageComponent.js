import React, {useState} from "react";
import classes from "./MessageStyle.module.scss";
import user_icon from '../../../../../images/forum_chat_def_user_icon.jpg'
import {TiDeleteOutline} from "react-icons/ti";
import {AiOutlineEdit} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {deleteForumComment, updateForumComment} from "../../../../../redux/actions/forumActions";
import {toast} from "react-toastify";

function MessageComponent(props){
    const token = useSelector(state=>state.user_info.token);
    const user_id = useSelector(state=>state.user_info.id);
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
                    token: token,
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
        toast.info("Удаление пока не работает !");
        // dispatch(deleteForumComment({token: token, id: props.data.id}));
    }

    return(
        <div className={classes.message_wrapper}>
            <div className={classes.user}>
                Ответ:
            </div>
            <div className={classes.text}>
                {props.data.description}
            </div>
            {
                token&&props.m?
                        props.data.user_id===user_id?
                            <>
                                <div className={classes.control_wrapper}>
                                    <AiOutlineEdit onClick={()=>{setEditComment(prevState => {return {comment: props.data.description, isEdit: true}})}}/>
                                    <TiDeleteOutline onClick={deleteHandler}/>
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