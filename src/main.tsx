import "./scss/index.scss";
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import router from "./route/router/router.tsx";
import Providers from "./utils/Providers.tsx";

createRoot(document.getElementById('root')!).render(
    <Providers>
        <RouterProvider router={router} />
    </Providers>
)