import appAxios from "../../../../config/appAxios";

export default async function   updateAppointments(data){
    console.log(data);
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`
    }
    let axios = appAxios(headers);
    let url =  `appointment/update?appointment_id=${parseInt(data.id)}&status=${parseInt(data.status)}`;

    let response = await axios.put(url)
        .then(res=>{
            console.log(res);
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
