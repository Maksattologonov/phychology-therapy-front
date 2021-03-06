import appAxios from "../../../../config/appAxios";

async function updateComment(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`,
        'Content-Type': 'application/json'
    }
    let axios = appAxios(headers);
    let url =  `/catalog/update-comment/forum`;

    let body={
        comment_id: data.comment_id,
        description: data.description
    }

    console.log(data);

    let response = await axios.patch(url, body)
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

export default updateComment;