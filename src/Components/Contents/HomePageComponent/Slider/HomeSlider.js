import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from "./Slide/Slide";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

let slides = [
    {
        title: '1 полезный навык психолога',
        text: 'Навыки коммуникации. Умение общаться с людьми – обязательное качество для любого специалиста. Вы получаете более глубокое понимание того, как люди выражают себя в словах. Вы можете избежать любых ошибок плохого общения, таких как недоразумения. Умение правильно взаимодействовать с людьми полезно везде: дома, на работе, при воспитании детей, знакомствах и т.д.',
        image: 'https://cdn.wallpapersafari.com/22/23/E3vNtI.jpg',
        link: '/#'
    },
    {
        title: '2 полезный навык психолога',
        text: 'Критическое мышление. Главная сила психолога – это его мозг. Специалист умеет исследовать один и тот же вопрос из множества ракурсов. В рамках этого обучения критическое мышление оттачивается, чтобы быть более точным и надежным. Формируется объективное, непредвзятое отношение к людям и событиям. Вам не нужно «идти на поводу» и делать то, что навязывает окружение. Психолог не подвластен сиюминутным эмоциям.',
        image: 'https://wallpaperaccess.com/full/13219.jpg',
        link: '/#'
    },
    {
        title: '3 полезный навык психолога',
        text: 'Понимание поведения людей. Мы часто совершаем поступки, логику которых сложно понять. Изучая психологию, вы получаете доступ к глубинам человеческого разума. Это дает возможность понять, что именно заставило человека совершить те или иные поступки. Понимание таких взаимосвязей между причиной и следствием способствует формированию здоровых отношений.',
        image: 'https://cdn.wallpapersafari.com/22/23/E3vNtI.jpg',
        link: '/#'
    },
]


export default function HomeSlider(){

    return(
        <Swiper
            spaceBetween={0}
            onSlideChange={() =>{}}
            onSwiper={(swiper) => {}}
            navigation={true} modules={[Navigation, Autoplay]} className="mySwiper"
            speed={1000}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
        >
            {
                slides.map((item, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <Slide data = {item}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
