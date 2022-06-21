import appAxios from "../../../../config/appAxios";
import FormData from "form-data";

async function addForum(payload){
    let headers = {
        'accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${payload.token}`
    }
    let data = new FormData();
    data.append('image', payload.data.image);
    let axios = appAxios(headers);
    let url = `/catalog/create/forum?catalog_id=${payload.data.catalog_id}&title=${payload.data.title}&description=${payload.data.description}`

    let response = await axios.post(url, data)
        .then(res=>{
            return {
                error: false,
                data: res.data
            };
        })
        .catch(reject=>{
            return {
                error: true,
                message: reject.message
            };
        })
    return response;
}

export default addForum;