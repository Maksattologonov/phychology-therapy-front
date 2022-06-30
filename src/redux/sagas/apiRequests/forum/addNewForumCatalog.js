import appAxios from "../../../../config/appAxios";

async function addNewForumCatalog(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`
    }
    let axios = appAxios(headers);
    let url = `/catalog/create?title=${data.title}`

    let response = await axios.post(url)
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

export default addNewForumCatalog;