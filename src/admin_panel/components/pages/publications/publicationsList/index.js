import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ItemCard from "admin_panel/components/common/ItemCard";
import {AiFillDelete} from "react-icons/ai";
import {MdChangeCircle} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {deletePublication, loadPublications} from "../../../../../redux/actions/publicationAction";
import SpinnerComponent from "../../../../../Components/Spinner/SpinnerComponent";
import PublicationUpdate from "admin_panel/components/pages/publications/publicationUpdate";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export default function PublicationsList(props){

    const publications = useSelector(state=>state.publication_state.publications);
    const spinner = useSelector(state=>state.publication_state.spinner);
    const token = useSelector(state=>state.user_info.token);
    const dispatch = useDispatch()
    const [updateArticle, setUpdateArticle] = useState({
        id: null,
        update: false
    })

    useEffect(()=>{
        if(publications.length===0){
            dispatch(loadPublications());
        }
    }, [])

    function deleteHandler(id){
        dispatch(deletePublication({
            id: id,
            token: token
        }))
    }

    function redirectUpdatePage(id){
        setUpdateArticle(prevState => {
            return{id: id, update: true}
        })
    }

    return(
        <Wrapper>
            {
                updateArticle.update?
                    <PublicationUpdate id={updateArticle.id}/>:
                    spinner?
                        <SpinnerComponent/>
                        :
                        publications.length!==0?
                            publications.map((item, index)=>{
                                return(
                                    <ItemCard
                                        topBar={[
                                            {icon:<AiFillDelete/>, handler: deleteHandler},
                                            {icon:<MdChangeCircle/>, handler: redirectUpdatePage}
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