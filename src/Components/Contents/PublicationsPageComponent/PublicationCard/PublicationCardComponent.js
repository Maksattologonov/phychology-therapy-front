import React, {useRef} from "react";
import classes from "./PublicationCardStyle.module.scss";
import {useNavigate} from "react-router-dom";
import {getImageUrl} from "../../../../config/fileConfig";
import cardDefImage from "../../../../images/publication_card_defoalt_image.png";

function PublicationCardComponent(props){

    const navigate = useNavigate();

    const publicationClickHandler = (e)=>{
        e.preventDefault();
        navigate(`/publications/publication/${props.id}`);
    }

    if(Object.keys(props.data).length!==0){
       return(
           <div className={classes.card_wrapper}>

               <img src={props.data.image===""?cardDefImage:getImageUrl(props.data.image)} alt=""/>
               <div className={classes.card_text}>
                   <h3>
                       {props.data.title}
                   </h3>
                   <span>
                    {props.data.description.length>50?
                        props.data.description.slice(0, 50)+'...'
                        :
                        props.data.description
                    }
                </span>
                   <button onClick={publicationClickHandler}>
                       Просмотреть
                   </button>
               </div>
           </div>
       )
    }else{
        navigate('/publications');
    }
}

export default PublicationCardComponent;