import {IArtwork} from "../../types/data/data_types_2.ts";
import {AxiosResponse} from "axios";
import axios_instance from "../axios_instance.ts";

const get_one_artwork: (id: string) => Promise<IArtwork> = async (id: string): Promise<IArtwork> => {

    const response: AxiosResponse<IArtwork> = await axios_instance().get("/artworks/" + id);

    return response.data;

}

export default get_one_artwork;