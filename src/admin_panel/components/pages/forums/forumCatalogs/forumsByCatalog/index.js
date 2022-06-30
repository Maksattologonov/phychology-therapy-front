import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AiFillDelete} from "react-icons/ai";
import SpinnerComponent from "../../../../../../Components/Spinner/SpinnerComponent";
import ItemCard from "../../../../common/ItemCard";
import {loadFormsAction} from "../../../../../../redux/actions/forumActions";
import {deleteUserForum} from "../../../../../../redux/actions/userActions";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const BackIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #0D2D62;
  cursor: pointer;
`

export default function ForumsByCatalog(props){

    const forums = useSelector(state=>state.forum_state.forums);
    const spinner = useSelector(state=>state.forum_state.spinner);
    const token = useSelector(state=>state.user_info.token);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadFormsAction({id: props.id}));
    }, [])

    function deleteHandler(id){
        dispatch(deleteUserForum({
            id: id,
            token: token
        }))
    }

    return(
        <Wrapper>
            <BackIcon>
                <span onClick={props.closePage}> {"<- назад"} </span>
            </BackIcon>
            {
                spinner?
                    <SpinnerComponent/>
                    :
                    forums.length!==0?
                        forums.map((item, index)=>{
                            return(
                                <ItemCard
                                    topBar={[
                                        {icon:<AiFillDelete/>, handler: deleteHandler},
                                    ]}
                                    id={item.id}
                                    text={item.title}
                                    index={index}
                                    key={index}
                                />
                            )
                        })
                        :
                        'Пока форумов нету'
            }
        </Wrapper>
    )
}