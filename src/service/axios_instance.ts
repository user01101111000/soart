import axios, {AxiosInstance} from "axios";

const axios_instance: () => AxiosInstance = (): AxiosInstance => {
    return axios.create({
        baseURL: "https://api.artic.edu/api/v1"
    })
}

export default axios_instance;