import appAxios from "../../../../config/appAxios";

export default async function userInfo(token){

    let axios = appAxios({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
    })

    let response = await axios.get("/auth/user")
        .then(res=>{
            return{
                data: res.data,
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