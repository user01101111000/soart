import {useMutation, UseMutationResult} from "@tanstack/react-query";
import search_artwork from "../../service/artwork/search_artwork.ts";
import {ISearchArtworks} from "../../types/data/data_types_3.ts";

const useSearchArtworks: () => UseMutationResult<ISearchArtworks, unknown, string> = (): UseMutationResult<ISearchArtworks, unknown, string> => {
    return useMutation({
        mutationKey: ['search_artworks'],
        mutationFn: search_artwork,
    })
}

export default useSearchArtworks;