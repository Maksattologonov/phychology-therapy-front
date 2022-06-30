import React, {useEffect, useState} from "react";
import classes from "./CreateNewForumStyle.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {
    addNewForm, getForumCatalogs,
} from "../../../../redux/actions/forumActions";
import {NavLink, useNavigate} from "react-router-dom";
import SpinnerComponent from "../../../Spinner/SpinnerComponent";

function CreateNewForum(){
    let [state, setState] = useState({
        title: '',
        description: '',
        catalog_id: '',
        image: ''
    })
    const token = useSelector(state=>state.user_info.token);
    const spinner = useSelector(state=>state.forum_state.spinner);
    const catalogs = useSelector(state=>state.forum_state.catalogs);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let isReady = false;

    useEffect(()=>{
        if(!token){
            navigate('/auth/authorization');
        }
        if(catalogs.length===0){
            dispatch(getForumCatalogs());
        }
    }, [])

    function inputTitleHandler(e){
        setState(prevState => {
            return{...prevState, title: e.target.value}
        })
    }

    function inputDescriptionHandler(e){
        setState(prevState => {
            return{...prevState, description: e.target.value}
        })
    }

    function inputFileHandler(e){
        setState(prevState => {
            return{...prevState, image: e.target.files[0]}
        })
    }


    function  sendHandler(e){
        e.preventDefault();
        dispatch(addNewForm({
            token: token,
            data: state
        }));
        setState({title: '', description: '', catalog_id: '', image: ''});
    }

    if(
        state.title.length!==0 &&
        state.description.length!==0&&
        state.catalog_id.length!==0
    ) {
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
                    onChange={inputTitleHandler}
                />
                <label className={classes.label}>
                    Описание проблемы:
                </label>
                <textarea
                    className={classes.input}
                    cols={20} rows={5}
                    placeholder={"Введите текст"}
                    value={state.description}
                    onChange={inputDescriptionHandler}
                />

                <label className={classes.label}>
                    Выберите категорию:
                </label>
                <div className={classes.selector}>
                    {
                        spinner?<SpinnerComponent/>:
                            catalogs.length===0?"Категорий пока нету":
                                catalogs.map((item, index)=>{
                                    return(
                                        <div
                                            className={item.id===state.catalog_id?classes.option+' '+classes.active:classes.option}
                                            key={index}
                                            onClick={()=>{setState(prevState => {
                                                return{...prevState, catalog_id: item.id}
                                            })}}
                                        >
                                            <div className={classes.sign}/>
                                            <p>{item.title}</p>
                                        </div>
                                    )
                                })
                    }

                </div>

                <label className={classes.label}>
                    Добавить фото:
                </label>
                <input
                    type="file"
                    className={classes.input}
                    onChange={(e)=>{
                        inputFileHandler(e)
                    }}
                />
                <button className={isReady?classes.button+' '+classes.active:classes.button} disabled={!isReady} onClick={sendHandler}>
                    Отправить
                </button>
            </form>
            <span className={classes.span}>
                <NavLink to={'/form/catalogs'}>
                    Перейти на страницу с форумами
                </NavLink>
            </span>
        </div>
    )
}

export default CreateNewForum;