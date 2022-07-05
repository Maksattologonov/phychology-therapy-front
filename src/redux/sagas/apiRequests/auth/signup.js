import appAxios from "../../../../config/appAxios";

export default async function signUp(d){

    let axios = appAxios({'Content-Type': 'application/json'});

    let response = await axios.post('/auth/sign-up', d)
        .then(response=>{
            return {
                data: response,
                error: false
            };
        })
        .catch(reject=>{
            return {
                message: reject.message,
                error: true
            };
        })
    return response;
}