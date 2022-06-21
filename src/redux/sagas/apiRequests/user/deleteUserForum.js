import appAxios from "../../../../config/appAxios";

async function deleteUserForum(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`
    }
    let axios = appAxios(headers);
    let url =  `/catalog/delete/forum?pk=${data.id}`

    let response = await axios.delete(url)
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

export default deleteUserForum;