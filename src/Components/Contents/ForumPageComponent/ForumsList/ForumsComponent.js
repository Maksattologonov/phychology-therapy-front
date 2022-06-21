import React, {useEffect} from "react";
import classes from "./ForumsStyle.module.scss";
import ForumCardComponent from "./ForumCard/ForumCardComponent";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {forumCommentsReset, loadFormsAction} from "../../../../redux/actions/forumActions";
import SpinnerComponent from "../../../Spinner/SpinnerComponent";
import Subtitle from "../../../Common/Subtitle/SubtitleComponent";

function ForumsComponent(){

    const navigate = useNavigate();
    const forums = useSelector(state=>state.forum_state.forums);
    const spinner = useSelector(state=>state.forum_state.spinner);
    const catalog_id = useParams().id;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(forumCommentsReset());
        if(forums.length===0){
            dispatch(loadFormsAction({
                id: catalog_id
            }));
        }
    }, [])

    const goBack = (e)=>{
        e.preventDefault();
        navigate(-1);
    }

    const createForm = ()=>{
        navigate('/forum/create-new-forum');
    }

    return(
        <div className={classes.forms_wrapper}>
            <div className={classes.forms_title}>
                <Subtitle>
                    Форумы
                </Subtitle>
            </div>
            <div className={classes.forms}>
                <button onClick={goBack}>
                    {"<- назад"}
                </button>

                {
                    spinner?
                        <SpinnerComponent/>:
                        forums.length===0?
                            <div style={{width: '100%', margin: "20px 0", textAlign: "center"}}>
                                Пока форумов нету
                            </div>:
                            forums.map((item, index)=>{
                                return(
                                    <ForumCardComponent
                                        title={item.title}
                                        description={item.description.slice(0, 120)}
                                        date={item.created_at.slice(0, 10)}
                                        images={item.images}
                                        forum_id={item.id}
                                        index={index}
                                        key={index}
                                    />
                                )
                            })
                }
                <button onClick={createForm}>
                    {"Создать новый форум"}
                </button>
            </div>
        </div>
    )
}

export default ForumsComponent;