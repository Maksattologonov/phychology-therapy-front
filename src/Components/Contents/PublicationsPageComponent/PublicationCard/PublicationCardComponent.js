import React, {useRef} from "react";
import classes from "./PublicationCardStyle.module.scss";
import {getImageUrl} from "../../../../config/fileConfig";
import MoreButton from "../../../Common/MoreButton/MoreButton";
import defaultCardImage from "../../../../images/publication_card_defoalt_image.jpg"
function PublicationCardComponent(props){

    if(Object.keys(props.data).length!==0){
       return(
           <div className={classes.card_wrapper}>

               <img src={props.data.image?getImageUrl(props.data.image):defaultCardImage} alt=""/>
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
                   <MoreButton link={`/publications/publication/${props.id}`}>
                       Просмотреть
                   </MoreButton>
               </div>
           </div>
       )
    }else{
        navigate('/publications');
    }
}

export default PublicationCardComponent;