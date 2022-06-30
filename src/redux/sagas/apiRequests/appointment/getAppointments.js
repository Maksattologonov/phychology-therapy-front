import appAxios from "../../../../config/appAxios";

export default async function getAppointments(data){
    let headers={};
    let url = '';
    if(data.token){
        url =  '/appointment/get-own';
        headers={'accept': 'application/json', 'Authorization': `Bearer ${data.token}`}
    }else{
        url = `/appointment/get?employee_id=${parseInt(data.id)}`;
        headers={'accept': 'application/json'}
    }
    let axios = appAxios(headers);

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
