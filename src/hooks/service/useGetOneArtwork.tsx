import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {IArtwork} from "../../types/data/data_types_2.ts";
import get_one_artwork from "../../service/artwork/get_one_artwork.ts";

const useGetOneArtwork: (id: string) => UseQueryResult<IArtwork> = (id: string): UseQueryResult<IArtwork> => {
    return useQuery({
        queryKey: ['artwork', id],
        queryFn: (): Promise<IArtwork> => get_one_artwork(id),
        staleTime: 300000,
        retry: 2,
    });
}

export default useGetOneArtwork;