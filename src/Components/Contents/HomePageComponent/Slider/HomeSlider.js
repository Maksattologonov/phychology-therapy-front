import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from "./Slide/Slide";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

let slides = [
    {
        title: 'Lorem ipsum',
        text: 'Для заполнения страницы в веб-дизайне используют специально сгенерированный бессмысленный текст, получивший название Lorem ipsum. Перевод данной фразы в таком виде отсутствует, это искаженная цитата из труда Цицерона «О пределах добра и зла», написанного на латыни. Данное словосочетание — обрезка фразы «Dolorem ipsum», которая переводится как «саму боль». ',
        image: 'https://cdn.wallpapersafari.com/22/23/E3vNtI.jpg',
        link: '/#'
    },
    {
        title: 'Lorem ipsum',
        text: 'Для заполнения страницы в веб-дизайне используют специально сгенерированный бессмысленный текст, получивший название Lorem ipsum. Перевод данной фразы в таком виде отсутствует, это искаженная цитата из труда Цицерона «О пределах добра и зла», написанного на латыни. Данное словосочетание — обрезка фразы «Dolorem ipsum», которая переводится как «саму боль». ',
        image: 'https://wallpaperaccess.com/full/13219.jpg',
        link: '/#'
    },
    {
        title: 'Lorem ipsum',
        text: 'Для заполнения страницы в веб-дизайне используют специально сгенерированный бессмысленный текст, получивший название Lorem ipsum. Перевод данной фразы в таком виде отсутствует, это искаженная цитата из труда Цицерона «О пределах добра и зла», написанного на латыни. Данное словосочетание — обрезка фразы «Dolorem ipsum», которая переводится как «саму боль». ',
        image: 'https://cdn.wallpapersafari.com/22/23/E3vNtI.jpg',
        link: '/#'
    },
    {
        title: 'Lorem ipsum',
        text: 'Для заполнения страницы в веб-дизайне используют специально сгенерированный бессмысленный текст, получивший название Lorem ipsum. Перевод данной фразы в таком виде отсутствует, это искаженная цитата из труда Цицерона «О пределах добра и зла», написанного на латыни. Данное словосочетание — обрезка фразы «Dolorem ipsum», которая переводится как «саму боль». ',
        image: 'https://wallpaperaccess.com/full/13219.jpg',
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
