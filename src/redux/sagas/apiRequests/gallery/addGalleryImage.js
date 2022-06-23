import appAxios from "../../../../config/appAxios";

async function AddGalleryImage(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`,
        'Content-Type': 'multipart/form-data',
    }
    let d = new FormData();
    d.append('image', data.image);
    let axios = appAxios(headers);
    let url =  `/gallery/create?gallery_title_id=${data.title_id}`;

    let response = await axios.post(url, d)
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

export default AddGalleryImage;