import React from "react";
import classes from "./PsychologistPageStyle.module.scss";

function PsychologistPageComponent(){

    return(
        <div className={classes.psychologist_wrapper}>
            <div className={classes.block_1+" "+classes.blocks}>
                <h4><span><h3>Специалист</h3></span></h4>
                <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt=""/>
                <div className={classes.contacts}>
                    <span> <h2>Doctor's name</h2> </span>
                    <span> Психолог практик </span>
                    <span> <p>Phone number 1</p> </span>
                    <span> <p>Phone number 2</p> </span>
                    <span> <p>Whats app</p> </span>
                    <span> <p>Telegram</p> </span>
                    <span> <p>Instagram</p> </span>
                    <span> <p>Email</p> </span>
                </div>
            </div>
            <div className={classes.block_2+" "+classes.blocks}>
                <h4><span><h3>Вы столкнулись со следующими трудностями</h3></span></h4>
                <p> Проблемы во взаимоотношениях с близкими </p>
                <p> Стрессы на работе </p>
                <p> Неуверенность в себе </p>
                <p> Сложность с принятием решений </p>
                <p> Одиночество и поиск партнера </p>
                <p> Страх, тревога, телесное напряжение </p>
                <p> Эмоциональная импульсивность </p>
                <p>  Депрессия </p>
                <p>Нежелательные чувства (вина, стыд, обида, печаль, гнев, ревность и т.д.)</p>
            </div>
            <div className={classes.block_3+" "+classes.blocks}>
                <h4><span><h3>Обо мне</h3></span></h4>
                <p>
                    Я практикующий психолог. Опыт работы с детьми, со взрослыми людьми, людьми страдающими личностными расстройствами и шизофренией (в сотрудничестве с психиатром). Консультирую очно и онлайн.
                </p>
                <p>Образование</p>
                <p>Образование: Высшее психологическое – специалист.</p>
                <p>2016 г. “Транзактный анализ” 101 курс</p>
                <p>2017- 2019 г.  “Гештальт-терапия” 460 часов</p>
                <p>2018- 2019 г. “ Когнетивно-поведенческая терапия” 84 часа</p>
                <p>2019г. “ Оказание помощи в связи с психическими и неврологическими расстройствами, а так же расстройствами, связанными с употреблением психоактивных веществ, в неспециализированных учреждениях здравоохранения. Руководство MHGAP-IG (ВОЗ) ”</p>

                <div className={classes.block_3_images}>
                    <img src="https://www.psy-health.kg/plugins/content/admirorgallery/admirorgallery/thumbs/yana/yc.jpg" alt=""/>
                    <img src="https://www.psy-health.kg/plugins/content/admirorgallery/admirorgallery/thumbs/yana/yc.jpg" alt=""/>
                    <img src="https://www.psy-health.kg/plugins/content/admirorgallery/admirorgallery/thumbs/yana/yc.jpg" alt=""/>
                    <img src="https://www.psy-health.kg/plugins/content/admirorgallery/admirorgallery/thumbs/yana/yc.jpg" alt=""/>
                    <img src="https://www.psy-health.kg/plugins/content/admirorgallery/admirorgallery/thumbs/yana/yc.jpg" alt=""/>
                    <img src="https://www.psy-health.kg/plugins/content/admirorgallery/admirorgallery/thumbs/yana/yc.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default PsychologistPageComponent;