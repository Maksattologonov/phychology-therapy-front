import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {deleteForumCatalog, forumsReset, getForumCatalogs} from "../../../../../redux/actions/forumActions";
import SpinnerComponent from "../../../../../Components/Spinner/SpinnerComponent";
import ItemCard from "../../../common/ItemCard";
import {AiFillDelete} from "react-icons/ai";
import {BsFillChatSquareDotsFill} from "react-icons/bs";
import ForumsByCatalog from "./forumsByCatalog";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export default function ForumCatalogs(){

    const catalogs = useSelector(state=>state.forum_state.catalogs);
    const spinner = useSelector(state=>state.forum_state.spinner);
    const token = useSelector(state=>state.user_info.token);
    const dispatch = useDispatch()

    const [forums, setIsForums] = useState({isForums: false, id: null});

    useEffect(()=>{
        if(catalogs.length===0){
            dispatch(getForumCatalogs());
        }
    }, [])

    function deleteHandler(id){
        dispatch(deleteForumCatalog({
            id: id,
            token: token
        }))
    }

    function redirectForumsPage(id){
        setIsForums({isForums: true, id: id});
    }
    function closeForumsPage(){
        setIsForums({isForums: false, id: null});
        dispatch(forumsReset());
    }

    return(
        <Wrapper>
            {
                forums.isForums?
                    <ForumsByCatalog id={forums.id} closePage={closeForumsPage}/>:
                spinner?
                    <SpinnerComponent/>
                    :
                    catalogs.length!==0?
                        catalogs.map((item, index)=>{
                            return(
                                <ItemCard
                                    topBar={[
                                        {icon:<AiFillDelete/>, handler: deleteHandler},
                                        {icon:<BsFillChatSquareDotsFill/>, handler: redirectForumsPage}
                                    ]}
                                    id={item.id}
                                    text={item.title}
                                    index={index}
                                    key={index}
                                />
                            )
                        })
                        :
                        'Пока статей нету'
            }
        </Wrapper>
    )
}