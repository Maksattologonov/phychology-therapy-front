import appAxios from "../../../../config/appAxios";


async function sendEmail(email){

    let headers={'Content-Type': 'application/json'};
    let axios = appAxios(headers);
    let data = JSON.stringify({
        email: email
    })

    let response = await axios.post('/auth/send-email', data)
        .then(res=>{
            return{
                data: "Код успешно отправлен на вашу почту. Проверьте!",
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

export default sendEmail;