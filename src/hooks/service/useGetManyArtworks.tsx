import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {IArtwork} from "../../types/data/data_types_2.ts";
import get_one_artwork from "../../service/artwork/get_one_artwork.ts";

const useGetManyArtworks: () => UseQueryResult<IArtwork[]> = (): UseQueryResult<IArtwork[]> => {
    const ids: number[] = [27992, 86385, 28560, 6565, 95998, 28067, 80084, 15468, 111628, 16568];

    return useQuery({
        queryKey: ['explore_for_home_artworks'],
        queryFn: async (): Promise<IArtwork[]> => {

            const data: IArtwork[] = await Promise.all(ids.map((id: number): Promise<IArtwork> => get_one_artwork(id.toString())));

            return data;
        },
        staleTime: 300000,
        retry: 2,
    });
}

export default useGetManyArtworks;