import {FC, JSX} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import * as React from "react";

type ProvidersProps = {
    children: React.ReactNode
}

const query_client: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});


const Providers: FC<ProvidersProps> = (props: ProvidersProps): JSX.Element => {
    return <QueryClientProvider client={query_client}>{props.children}</QueryClientProvider>
}

export default Providers;