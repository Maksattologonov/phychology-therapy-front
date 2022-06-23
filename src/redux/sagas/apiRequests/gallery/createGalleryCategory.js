import appAxios from "../../../../config/appAxios";

async function CrateGalleryCategory(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`
    }
    let axios = appAxios(headers);
    let url =  `/gallery/create/title?title=${data.title}&description=${data.description}`;

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

export default CrateGalleryCategory;