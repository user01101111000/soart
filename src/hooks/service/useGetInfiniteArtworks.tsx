import {useInfiniteQuery, UseInfiniteQueryResult} from "@tanstack/react-query";
import get_artworks from "../../service/explore/get_artworks.ts";
import {ResponseArtworks} from "../../types/data/data_types.ts";

const useGetInfiniteArtworks: () => UseInfiniteQueryResult<{
    pages: ResponseArtworks[],
    pageParam: number[]
}, unknown> = (): UseInfiniteQueryResult<{ pages: ResponseArtworks[], pageParam: number[]}, unknown> => {
    return useInfiniteQuery({
        queryKey: ['artworks'],
        queryFn: get_artworks,
        initialPageParam: 1,
        getNextPageParam: (lastPage: ResponseArtworks): number => +lastPage.pagination.next_url.at(-1)!
    })
}

export default useGetInfiniteArtworks;