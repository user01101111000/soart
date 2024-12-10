import {ISearchArtworks} from "../../types/data/data_types_3.ts";
import {AxiosResponse} from "axios";
import axios_instance from "../axios_instance.ts";

const search_artwork: (term: string) => Promise<ISearchArtworks> = async (term: string): Promise<ISearchArtworks> => {

    const response: AxiosResponse<ISearchArtworks> = await axios_instance().get("/artworks/search", {
        params: {
            q: term
        }
    });

    return response.data;

}

export default search_artwork;