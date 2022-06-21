import React, {useEffect} from "react";
import classes from "./ForumCatalogStyle.module.scss";
import {MdOutlineForum} from "react-icons/md";
import Subtitle from "../../../Common/Subtitle/SubtitleComponent";
import CatalogCard from "../../../Common/CatalogCard/CatalogCard";
import {useDispatch, useSelector} from "react-redux";
import {forumsReset, getForumCatalogs} from "../../../../redux/actions/forumActions";
import SpinnerComponent from "../../../Spinner/SpinnerComponent";

function ForumCatalogs(){

    const catalogs = useSelector(state=>state.forum_state.catalogs);
    const isSpinner = useSelector(state=>state.forum_state.spinner);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(forumsReset());
        if(catalogs.length===0){
            dispatch(getForumCatalogs());
        }
    }, []);

    return(
        <div className={classes.wrapper}>
            <Subtitle>
                Выберите раздел который вас интересует
            </Subtitle>
            {
                isSpinner?<SpinnerComponent/>:
                    catalogs.length===0?
                        <h5>Каталогов еще нету</h5>
                        :
                        <div className={classes.content}>
                            {
                                catalogs.map(item=>{
                                    return(
                                        <CatalogCard key={item.id} link={`/forum/catalog/${item.id}/forums`} icon={<MdOutlineForum/>}>
                                            {item.title}
                                        </CatalogCard>
                                    )
                                })
                            }
                        </div>
            }
        </div>
    )
}

export default ForumCatalogs;