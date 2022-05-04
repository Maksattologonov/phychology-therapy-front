import React from "react"
import classes from "./FormPageStyle.module.scss";
import {useNavigate} from "react-router-dom";

function FormPageComponent(){

    const navigate = useNavigate();

    const goFormsClickHandler = (e)=>{
        e.preventDefault();
        navigate('/form/forms');
    }

    const createNewFormHandler = (e)=>{
        e.preventDefault();
        navigate('/form/create-new-form');
    }

    return(
        <div className={classes.form_wrapper}>
            <div className={classes.left_block}>
                <div className={classes.card_title}>
                <span>
                    Форум
                </span>
                </div>
                <div className={classes.title}>
                    Форум - это площадка для обсуждения беспокоящих вас тем
                </div>
                <p>
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    <span className={classes.button_wrapper}>
                        <button onClick={goFormsClickHandler}>
                            Перейти в Форумы
                        </button>
                        <button onClick={createNewFormHandler}>
                            Создать Форум
                        </button>
                    </span>
                </p>
            </div>
            <div className={classes.right_block}>
                <img src='https://thumbs.dreamstime.com/z/forum-chat-message-discuss-talk-topic-concept-57345158.jpg' alt=""/>
            </div>
        </div>
    )
}

export default FormPageComponent;