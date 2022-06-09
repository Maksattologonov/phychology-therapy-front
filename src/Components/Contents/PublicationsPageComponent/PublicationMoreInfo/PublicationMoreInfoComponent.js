import React, {useEffect} from "react";
import classes from "./PublicationMoreInfoStyle.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getImageUrl} from "../../../../config/fileConfig";
import publication_def_image from "../../../../images/publication_card_defoalt_image.png";
import Subtitle from "../../../Common/Subtitle/SubtitleComponent";

function PublicationMoreInfoComponent(){

    const navigate = useNavigate();
    const publications = useSelector(state=>state.publication_state.publications);
    let {id} = useParams();

    useEffect(()=>{
        if(publications.length===0){
            navigate('/publications');
        }
    }, []);

    const goBack = (e)=> {
        e.preventDefault();
        navigate(-1);
    }

    return(
        publications[id]?
            <div className={classes.publication_more_wrapper}>
                <Subtitle>
                    СТАТЬЯ
                </Subtitle>
                <div className={classes.context_wrapper}>
                    <span>
                        {publications[id].title}
                    </span>
                    <div>
                        <p> {publications[id].description} </p>
                        {
                            publications[id].image===""?
                                '':
                                <img src={getImageUrl(publications[id].image)} alt=""/>
                        }
                    </div>
                    <button onClick={goBack}>
                        {"<- назад"}
                    </button>
                </div>
            </div>
            :
            ''
    )
}

export default PublicationMoreInfoComponent;