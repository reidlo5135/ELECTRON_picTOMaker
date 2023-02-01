import axios from "axios";

export const get = async (url:string, config:any) => {
    try {
        return await axios.get(url, config);
    } catch (e) {
        throw e;
    }
}

export const post = async (url:string, data:any, config:any) => {
    try {
        return await axios.post(url, data, config);
    } catch (e) {
        throw e;
    }
}

export const put = async (url:string, data:any, config:any) => {
    try {
        return await axios.put(url, data, config);
    } catch (e) {
        throw e;
    }
}

export const del = async (url:string, config:any) => {
    try {
        return await axios.delete(url, config);
    } catch (e) {
        throw e;
    }
}