import appAxios from "../../../../config/appAxios";

export default async function   deleteAppointments(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`
    }
    let axios = appAxios(headers);
    let url =  `appointment/delete?pk=${data.id}`;

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
                data: reject.detail
            };
        })
    return response;
}
