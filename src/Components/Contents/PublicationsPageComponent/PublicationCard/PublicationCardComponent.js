import React, {useRef} from "react";
import classes from "./PublicationCardStyle.module.scss";
import {useNavigate} from "react-router-dom";

function PublicationCardComponent(){

    const navigate = useNavigate();

    const publicationClickHandler = (e)=>{
        e.preventDefault();
        navigate('/publications/publication/1');
    }


    return(
        <div className={classes.card_wrapper}>

            <img src="https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg" alt=""/>
            <div className={classes.card_text}>
                <h3>
                    Название статьи
                </h3>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </span>
                <button onClick={publicationClickHandler}>
                    Просмотреть
                </button>
            </div>
        </div>
    )
}

export default PublicationCardComponent;