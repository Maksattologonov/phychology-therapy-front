import * as qs from "qs";
import appAxios from "../../../../config/appAxios";

export default async function signIn(data){

    let d = qs.stringify(data);

    let axios = appAxios({'Content-Type': 'application/x-www-form-urlencoded'});

    let response = await axios.post('/auth/sign-in', d)
        .then(response=>{
            return {
                data: response.data,
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
