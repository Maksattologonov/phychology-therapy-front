import React, {useEffect} from "react";
import classes from "./CreateNewFormStyle.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {
    addNewForm,
    newFormDescriptionInput,
    newFormImageInput,
    newFormTitleInput
} from "../../../../redux/actions/formActions";
import {useNavigate} from "react-router-dom";

function CreateNewForm(){

    const state = useSelector(state=>state.form_state.new_form_data);
    const auth = useSelector(state=>state.authorization_state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let isReady = false;

    useEffect(()=>{
        if(!auth.authentication){
            navigate('/auth/authorization')
        }
    }, [])

    function inputHandler(e, action){
        dispatch(action(e.target.value));
    }

    function inputFileHandler(e, action){
        dispatch(action(e.target.files[0]));
    }

    function  sendHandler(e){
        e.preventDefault();
        dispatch(addNewForm({
            token: auth.token,
            data: state
        }));
    }

    if(
        state.title.length!==0 &&
        state.description.length!==0
    ){
        isReady = true
    }

    return(
        <div className={classes.create_form_wrapper}>
            <form className={classes.form}>
                <label className={classes.title}>
                    Новый форум
                </label>
                <label className={classes.label}>
                    Тема форума:
                </label>
                <input
                    type="text"
                    className={classes.input}
                    placeholder={"Введите текст"}
                    value={state.title}
                    onChange={(e)=>{
                        inputHandler(e, newFormTitleInput)
                    }}
                />
                <label className={classes.label}>
                    Описание проблемы:
                </label>
                <textarea
                    className={classes.input}
                    cols={20} rows={10}
                    placeholder={"Введите текст"}
                    value={state.description}
                    onChange={(e)=>{
                        inputHandler(e, newFormDescriptionInput)
                    }}
                />
                <label className={classes.label}>
                    Добавить фото:
                </label>
                <input
                    type="file"
                    className={classes.input}
                    onChange={(e)=>{
                        inputFileHandler(e, newFormImageInput)
                    }}
                />
                <button className={classes.button} disabled={!isReady} onClick={sendHandler}>
                    Отправить
                </button>
            </form>
        </div>
    )
}

export default CreateNewForm;