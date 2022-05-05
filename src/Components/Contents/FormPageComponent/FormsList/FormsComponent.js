import React, {useEffect} from "react";
import classes from "./FormsStyle.module.scss";
import FormCardComponent from "./FormCard/FormCardComponent";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {forumCommentsReset, loadFormsAction} from "../../../../redux/actions/formActions";
import SpinnerComponent from "../../../Spinner/SpinnerComponent";

function FormsComponent(){

    const navigate = useNavigate();
    const state = useSelector(state=>state.form_state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(forumCommentsReset());
        if(state.forms.length===0){
            dispatch(loadFormsAction({
                count: state.pagination.count,
                page: state.pagination.page
            }));
        }
    }, [])

    const goBack = (e)=>{
        e.preventDefault();
        navigate(-1);
    }

    const createForm = ()=>{
        navigate('/form/create-new-form');
    }

    return(
        <div className={classes.forms_wrapper}>
            <div className={classes.forms_title}>
                <span>
                    Ознакомьтесь с уже ранее созданными темами или предложите свою
                </span>
            </div>
            <div className={classes.forms}>
                <button onClick={goBack}>
                    {"<- назад"}
                </button>

                {
                    state.forms.length===0?
                        <SpinnerComponent/>:
                        state.forms.map((item, index)=>{
                            return(
                                <FormCardComponent
                                    title={item.title}
                                    description={item.description.slice(0, 120)}
                                    date={item.created_at.slice(0, 10)}
                                    images={item.images}
                                    id={item.id}
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

export default FormsComponent;