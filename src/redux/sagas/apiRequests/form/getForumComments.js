import appAxios from "../../../../config/appAxios";

async function getForumComments(payload){
    let headers = {
        'accept': 'application/json',
    }
    let axios = appAxios(headers);
    let url = `/forum/get-comment?pk=${payload.id}`;
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
                message: reject.message
            };
        })
    return response;
}

export default getForumComments;