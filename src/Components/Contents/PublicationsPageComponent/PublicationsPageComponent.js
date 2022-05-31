import React, {useEffect} from "react";
import classes from "./PublicationsPageStyle.module.scss";
import PublicationCardComponent from "./PublicationCard/PublicationCardComponent";
import SpinnerComponent from "../../Spinner/SpinnerComponent";
import {useDispatch, useSelector} from "react-redux";
import {loadPublications} from "../../../redux/actions/publicationAction";

function PublicationsPageComponent(){

    const state = useSelector(state=>state.publication_state);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(state.publications.length===0){
            dispatch(loadPublications());
        }
    }, [])

    return(
        <div className={classes.publication_wrapper}>
            <div className={classes.title_wrapper}>
                Публикации
            </div>
            {
                state.spinner?
                    <SpinnerComponent/>
                    :
                    state.publications.length!==0?
                        state.publications.map((item, index)=>{
                            return(
                                <PublicationCardComponent
                                    data={item}
                                    id={index}
                                    key={index}
                                />
                            )
                        })
                        :
                        'Пока статей нету'
            }
        </div>
    )
}

export default PublicationsPageComponent;