import appAxios from "../../../../config/appAxios";

async function loadUserForums(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`
    }
    let axios = appAxios(headers);
    let url =  `/forum/get-own?count=${data.count}&page=${data.page}`

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

export default loadUserForums;