import appAxios from "../../../../config/appAxios";

export default async function   addAppointments(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`
    }
    let type = data.data.appointment_type==='single'?1:2;
    let axios = appAxios(headers);
    let url =  `appointment/create?phone_number=${data.data.phone_number}&employee_id=${data.data.doctor_id}&address=${data.data.address}&status=1&type=${type}&date_time=${data.data.date}`;

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
                data: reject.detail
            };
        })
    return response;
}
