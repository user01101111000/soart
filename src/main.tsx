import "./scss/index.scss";
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from "./route/router/router.tsx";
import Providers from "./helpers/Providers.tsx";


createRoot(document.getElementById('root')!).render(
    <Providers>
        <RouterProvider router={router}/>
    </Providers>
)

// https://dribbble.com/shots/23841881-Artist-portfolio-Website
//https://dribbble.com/shots/25139444-Website-Design-for-Artists