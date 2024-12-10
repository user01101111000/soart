import {ChangeEvent, Dispatch, FC, JSX, MutableRefObject, SetStateAction, useEffect, useRef, useState} from "react";
import useSearchArtworks from "../../../hooks/service/useSearchArtworks.tsx";
import {Datum, ISearchArtworks} from "../../../types/data/data_types_3.ts";
import {NavigateFunction, useNavigate} from "react-router-dom";

type SearchBarProps = {
    setShowSearch: Dispatch<SetStateAction<boolean>>
}

const SearchBar: FC<SearchBarProps> = (props: SearchBarProps): JSX.Element => {

    useEffect((): void => {
        inp_ref?.current?.focus();
    }, [])


    const [val, setValue] = useState<string>("")
    const [results, setResults] = useState<ISearchArtworks | null>(null)
    const inp_ref: MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);
    const navigate: NavigateFunction = useNavigate();
    const {mutateAsync} = useSearchArtworks();


    const search_now: () => Promise<void> = async (): Promise<void> => {
        const responses: ISearchArtworks = await mutateAsync(val);

        setResults(responses);
    }


    const li_items: JSX.Element[] | undefined = results?.data?.map((x: Datum): JSX.Element => <li
        key={x.id} onClick={(): void => {
        navigate("/explore/" + x.id);
    }}>

        <figure style={{
            height: "40px",
            width: "50px",

        }}>
            <img src={x?.thumbnail?.lqip} alt={x?.thumbnail?.alt_text} style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px"
            }}/>
        </figure>

        <h1>{x.title}</h1>


    </li>)


    return <div
        className={"search_container"}>
        <input ref={inp_ref} type="search" placeholder={"Search"} value={val}
               onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                   setValue(e.currentTarget.value);
                   search_now();
               }} onBlur={(): void => {

            setTimeout((): void => {
                props.setShowSearch(false)
            }, 100)

        }}/>

        <div className={"list_wrapper"}>
            {val && li_items && li_items?.length > 0 && <ul>{li_items}</ul>}
        </div>
    </div>
}

export default SearchBar;