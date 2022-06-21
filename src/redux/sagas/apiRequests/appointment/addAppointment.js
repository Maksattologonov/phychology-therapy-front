import appAxios from "../../../../config/appAxios";

export default async function addAppointments(){
    let headers = {
        'accept': 'application/json'
    }
    let axios = appAxios(headers);
    let url =  `/gallery/get/title`;

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
