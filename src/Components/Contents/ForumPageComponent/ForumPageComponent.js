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
                    Очень часто люди, особенно в моменты тяжёлых переживаний, испытывают потребность в помощи психолога или просто в человеческом общении с людьми, которые испытали или испытывают в данный момент нечто подобное. Где найти такое общение? Ведь порой совсем не хочется делиться чем-то сокровенным даже с близкими родственниками, друзьями, которые могут не так понять, осудить, начать «воспитывать», а то и, того хуже, рассказать о ваших бедах и переживаниях посторонним людям. Что же делать?
                    <br/>
                    К счастью, в наш век психологическая помощь может сама «прийти» к нуждающемуся человеку домой. Как это возможно? Да очень просто – достаточно зайти на психологический форум.
                    <span className={classes.button_wrapper}>
                        <MoreButton link='/forum/catalogs'>
                            Каталог форумов
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