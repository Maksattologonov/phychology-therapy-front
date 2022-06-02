import appAxios from "../../../../config/appAxios";

async function resetPassword(d){

    let headers={'Content-Type': 'application/json'};
    let axios = appAxios(headers);
    let data = JSON.stringify(d);

    let response = await axios.put('/auth/reset-password', data)
        .then(res=>{
            return{
                data: "Пароль успешно изменен !",
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

export default resetPassword;