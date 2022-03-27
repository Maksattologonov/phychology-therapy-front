import React from "react";
import classes from "./HomePageStyle.module.scss";
import main_image from "../../../images/home_page_main_image.png";
import HomeCardComponent from "./Cards/HomeCardComponent";

const HomePageComponent = (props)=>{

    return(
        <div className={classes.home_content_wrapper}>
            <div className={classes.image_wrapper}>
                <img src={main_image} alt=""/>
                <div className={classes.image_text_wrapper}>
                    Оказание психологической поддержки и помощи студентам университета “Манас”
                </div>
            </div>

            <HomeCardComponent
                card_title='О Психологе'
                title='Вы всегда можете обратиться за помощью'
                image='https://www.parasels.ru/upload/medialibrary/ea5/xea51e99eeda69412e238470202f0301c.jpg.pagespeed.ic.G6N4iXv3ar.jpg'
                color='white'
            />
            <HomeCardComponent
                card_title='Форум'
                title='Обсуждайте проблемы на нашем форуме'
                image='https://evrasia-volga.com/wp-content/uploads/2020/10/forum.png'
                color='#EFF7F2'
            />
            <HomeCardComponent
                card_title='Публикации'
                title='Информация о данном разделе'
                image='https://scienceproblems.ru/images/stories/%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-%D0%BD%D0%B0%D1%83%D1%87%D0%BD%D1%8B%D1%85-%D1%81%D1%82%D0%B0%D1%82%D0%B5%D0%B9.jpg'
                color='white'
            />

        </div>
    )
}

export default HomePageComponent;