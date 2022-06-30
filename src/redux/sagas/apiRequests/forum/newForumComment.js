import appAxios from "../../../../config/appAxios";

async function newForumComment(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`,
        'Content-Type': 'application/json'
    }
    let axios = appAxios(headers);
    let url =  `/catalog/create-comment/forum`

    let body={
        forum_id: data.forum_id,
        description: data.description
    }

    let response = await axios.post(url, body)
        .then(res=>{
            return {
                error: false,
                data: res.data
            };
        })
        .catch(reject=>{
            return {
                error: true,
                data: reject.detail
            };
        })
    return response;
}

export default newForumComment;