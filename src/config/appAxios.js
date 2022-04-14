import axios from "axios";
import {baseUrl} from "./appConfig";

function appAxios(headers){

    return axios.create({
        baseURL: baseUrl,
        timeout: 5000,
        headers: headers,
    })
}

export default appAxios;