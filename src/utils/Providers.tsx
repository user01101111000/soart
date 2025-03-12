import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProvidersProps } from "../types/component/component_types.ts";

const query_client: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

const Providers: React.FC<ProvidersProps> = (props: ProvidersProps): React.JSX.Element => {
    return <QueryClientProvider client={query_client}>{props.children}</QueryClientProvider>
}

export default Providers;