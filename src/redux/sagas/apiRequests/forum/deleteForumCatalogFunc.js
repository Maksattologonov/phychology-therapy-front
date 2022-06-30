import appAxios from "../../../../config/appAxios";

async function deleteForumCatalogFunc(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`
    }
    let axios = appAxios(headers);
    let url = `/catalog/delete?pk=${data.id}`

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
                message: reject.message
            };
        })
    return response;
}

export default deleteForumCatalogFunc;