import React, {useEffect, useState} from "react";
import classes from "./MyForumsStyle.module.scss";
import {GrUpdate} from 'react-icons/gr';
import {TiDeleteOutline} from "react-icons/ti";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserForum, loadUserForums, updateUserForum} from "../../../../../redux/actions/userActions";
import {AiOutlineReload} from 'react-icons/ai';
import {toast} from "react-toastify";

function MyForums(){

    const dispatch = useDispatch();
    const state = useSelector(state=>state.user_state);
    const token = useSelector(state=>state.authorization_state.token);
    const [forum, setForum] = useState({id: null, message: '', type: ''});
    const [updateForum, setUpdateForum] = useState({id: '', title: '', description: '', image: '', active: false});

    useEffect(()=>{
        if(state.forums.data.length===0||state.forums.success){
            dispatch(loadUserForums({
                token: token,
                page: state.forums.pagination.page,
                count: state.forums.pagination.count
            }));
        }
    }, [state.forums.success])

    function confirmHandler(id, title, des){
        if(forum.type==='delete'){
            dispatch(deleteUserForum({
                token: token,
                id: id
            }));
        }else if(forum.type==='update'){
            setUpdateForum((prevState)=>{
                return {
                    ...prevState,
                    id: id,
                    title: title,
                    description: des,
                    active: true
                }
            })
        }
    }

    return(
        <div className={classes.forums_wrapper}>

            {
                !updateForum.active?
                    <>
                        <span className={classes.update_data_but}
                              onClick={()=>{
                                  dispatch(loadUserForums({
                                      token: token,
                                      page: state.forums.pagination.page,
                                      count: state.forums.pagination.count
                                  }));
                              }}
                        >
                <AiOutlineReload/> <span>Синхранизировать</span>
            </span>

                        {
                            state.forums.data.map((item, index)=>{
                                return(
                                    <div className={classes.forum} key={index}>
                                        <div className={classes.left}> {index+1} </div>
                                        <div className={classes.middle}>{item.title}</div>
                                        <div className={classes.right}>
                                            <GrUpdate onClick={
                                                ()=>{
                                                    setForum(prevState=>{
                                                        return{
                                                            ...prevState,
                                                            id: index,
                                                            message: 'Вы действительно хотите изменить этот ФОРУМ ?',
                                                            type: 'update'
                                                        }
                                                    })
                                                }
                                            }
                                            />
                                            <TiDeleteOutline size={22} onClick={()=>{
                                                setForum(prevState=>{
                                                    return{
                                                        ...prevState,
                                                        id: index,
                                                        message: 'Вы действительно хотите удалить этот ФОРУМ ?',
                                                        type: 'delete'
                                                    }
                                                })
                                            }}/>
                                        </div>
                                        <div className={index===forum.id?classes.confirm_block+' '+classes.active: classes.confirm_block}>
                                            <p>
                                                {forum.message}
                                            </p>
                                            <button className={classes.cancel} onClick={
                                                ()=>{
                                                    setForum(prevState=>{
                                                        return{
                                                            id: null,
                                                            message: '',
                                                            type: ''
                                                        }
                                                    })
                                                }
                                            } >
                                                Отменить
                                            </button>
                                            <button className={classes.confirm} onClick={
                                                ()=>{
                                                    confirmHandler(item.id,item.title,item.description);
                                                    setForum(prevState=>{
                                                        return{
                                                            id: null,
                                                            message: '',
                                                            type: '',
                                                        }
                                                    })
                                                }
                                            }>
                                                Потвердить
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>:
                    <div className={classes.form_wrapper}>
                        <form className={classes.form}>
                            <label className={classes.label}>Тема форума</label>
                            <input className={classes.input} onChange={(e)=>{
                                setUpdateForum(prevState => {
                                    return{...prevState, title: e.target.value}
                                })
                            }} value={updateForum.title} type="text"/>

                            <label className={classes.label}>Описание проблемы</label>
                            <input className={classes.input} onChange={(e)=>{
                                setUpdateForum(prevState => {
                                    return{...prevState, description: e.target.value}
                                })
                            }} value={updateForum.description}  type="text"/>

                            <label className={classes.label}>Фото</label>
                            <input className={classes.input} onChange={(e)=>{
                                setUpdateForum(prevState => {
                                    return{...prevState, image: e.target.files[0]}
                                })
                            }
                            }  type="file"/>

                            <button className={classes.button}
                                onClick={(e)=>{
                                    e.preventDefault();
                                    if(updateForum.title.length===0||updateForum.description.length===0){
                                        toast.warning('Заполните текстовые поля !')
                                    }else{
                                        dispatch(updateUserForum({
                                            ...updateForum,
                                            token: token
                                        }));
                                        setUpdateForum((prevState)=>{
                                            return {
                                                id: '',
                                                title: '',
                                                description: '',
                                                image: '',
                                                active: false
                                            }
                                        })
                                    }
                                }}
                            >
                                Изменить
                            </button>
                        </form>
                    </div>
            }

        </div>
    )
}

export default MyForums;