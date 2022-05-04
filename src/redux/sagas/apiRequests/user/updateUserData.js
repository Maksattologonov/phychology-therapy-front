import appAxios from "../../../../config/appAxios";

export default async function updateUserData(data){
    let axios = appAxios({
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`
    })

    let url = `/auth/update-profile?name=${data.data.name}&last_name=${data.data.last_name}&anonymous_name=${data.data.anonymous_name}`
    let response = await axios.patch(url)
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