import appAxios from "../../../../config/appAxios";
import FormData from "form-data";

async function updateUserForumFunc(data){
    let headers = {
        'accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${data.token}`
    }
    let axios = appAxios(headers);
    let url =  `/catalog/update/forum?id=${data.id}&title=${data.title}&description=${data.description}`

    let f_data = new FormData();
    f_data.append('image', data.image);

    let response = await axios.patch(url,  f_data)
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

export default updateUserForumFunc;