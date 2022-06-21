import React from "react"
import classes from "./ForumPageStyle.module.scss";
import Subtitle from "../../Common/Subtitle/SubtitleComponent";
import MoreButton from "../../Common/MoreButton/MoreButton";

function ForumPageComponent(){

    return(
        <div className={classes.form_wrapper}>
            <Subtitle>
                Форум
            </Subtitle>
            <div className={classes.left_block}>
                <div className={classes.title}>
                    Форум - это площадка для обсуждения беспокоящих вас тем
                </div>
                <p>
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    <span className={classes.button_wrapper}>
                        <MoreButton link='/forum/catalogs'>
                            Форумы
                        </MoreButton>
                        <MoreButton link='/forum/create-new-forum'>
                            Создать Форум
                        </MoreButton>
                    </span>
                </p>
            </div>
            <div className={classes.right_block}>
                <img src='https://thumbs.dreamstime.com/z/forum-chat-message-discuss-talk-topic-concept-57345158.jpg' alt=""/>
            </div>
        </div>
    )
}

export default ForumPageComponent;