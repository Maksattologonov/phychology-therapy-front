import appAxios from "../../../../config/appAxios";


async function confirm(d){

    let headers={'Content-Type': 'application/json'};
    let axios = appAxios(headers);
    let data = JSON.stringify(d);

    let response = await axios.post('/auth/verified-account', data)
        .then(res=>{
            return{
                data: "Аккаунт успешно активирован !",
                error: false
            }
        })
        .catch(reject=>{
            return{
                message: reject.message,
                error: true
            }
        })

    return response;
}

export default confirm;