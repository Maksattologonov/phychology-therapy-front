import React, {useState} from "react";
import classes from "./AddMessageStyle.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {addNewForumComment,} from "../../../../../redux/actions/formActions";
import {toast} from "react-toastify";

function AddMessageComponent(props){

    const token = useSelector(state=>state.authorization_state.token);
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    function sendHandler(e){
        e.preventDefault();
        if(comment.length!==0){
            toast.info('Запрос отправлен, ждите!');
            dispatch(addNewForumComment({
                forum_id: props.forum_id,
                description: comment,
                token: token
            }));
            setComment('');
        }
    }

    function inputHandler(e){
        setComment(e.target.value);
    }

    return(
        <form className={classes.form} ref={props.myRef}>
            <textarea
                value={comment}
                name="text"
                id="text"
                cols="15"
                rows="4"
                placeholder='Введите текст'
                onChange={inputHandler}
            />
            <button onClick={sendHandler} >
                Добавить
            </button>
        </form>
    )
}

export default AddMessageComponent;