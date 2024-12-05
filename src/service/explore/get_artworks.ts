import {AxiosResponse} from "axios";
import axios_instance from "../axios_instance.ts";
import {ResponseArtworks} from "../../types/data/data_types.ts";


const get_artworks: ({pageParam}: { pageParam: number }) => Promise<ResponseArtworks> = async ({pageParam}: {
    pageParam: number
}): Promise<ResponseArtworks> => {

    const response: AxiosResponse<ResponseArtworks> = await axios_instance().get("/artworks", {
        params: {
            page: pageParam
        }
    });


    return response.data;
}

export default get_artworks;