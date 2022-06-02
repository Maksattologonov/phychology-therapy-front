import appAxios from "../../../../config/appAxios";

async function loadForms(data){
    let headers = {
        'accept': 'application/json'
    }
    let axios = appAxios(headers);
    let url =  `/forum/get?count=${data.count}&page=${data.page}`

    let response = await axios.get(url)
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

export default loadForms;