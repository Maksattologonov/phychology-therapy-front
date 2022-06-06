import React from "react";
import classes from "./HomePageStyle.module.scss";
import HomeCardComponent from "./Cards/HomeCardComponent";
import HomeSlider from "./Slider/HomeSlider";


const HomePageComponent = (props)=>{

    return(
        <div className={classes.home_content_wrapper}>
            <div className={classes.slider_wrapper}>
                <HomeSlider/>
            </div>

            <HomeCardComponent
                card_title='О психологе'
                title='В этом разделе сайте, вы можете узнать больше информации о нашем психологе и записаться на прием.'
                image='https://www.parasels.ru/upload/medialibrary/ea5/xea51e99eeda69412e238470202f0301c.jpg.pagespeed.ic.G6N4iXv3ar.jpg'
                color='white'
                but_url={'/psychologist'}
            />
            <HomeCardComponent
                card_title='Форум'
                title='Если вас беспокоит какие то проблемы или же вас интересует какие то темы, вы можете их обсудить их с другими пользователями сайта.'
                image='https://evrasia-volga.com/wp-content/uploads/2020/10/forum.png'
                color='#EFF7F2'
                but_url={'/form'}
            />
            <HomeCardComponent
                card_title='Публикации'
                title='В этом разделе вы можете познакомиться интересными статьями которых публикует наш психотерапевт.'
                image='https://scienceproblems.ru/images/stories/%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-%D0%BD%D0%B0%D1%83%D1%87%D0%BD%D1%8B%D1%85-%D1%81%D1%82%D0%B0%D1%82%D0%B5%D0%B9.jpg'
                color='white'
                but_url={'/publications'}
            />

            <HomeCardComponent
                card_title='О сайте'
                title='В этом разделе вы узнайте как пользоваться и лучше ориентироваться в этом сайте.'
                image='https://scienceproblems.ru/images/stories/%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-%D0%BD%D0%B0%D1%83%D1%87%D0%BD%D1%8B%D1%85-%D1%81%D1%82%D0%B0%D1%82%D0%B5%D0%B9.jpg'
                color='#EFF7F2'
                but_url={'/work-with-website'}
            />

        </div>
    )
}

export default HomePageComponent;