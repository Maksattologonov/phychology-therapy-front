import appAxios from "../../../../config/appAxios";

export default async function addEmployee(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`
    }
    let axios = appAxios(headers);
    let url =  `/auth/create-employee?name=${data.data.name}&last_name=${data.data.last_name}&email=${data.data.email}&password=${data.data.password}`;

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