import { createHashRouter } from "react-router-dom";

import Home from "./pages/Home";
import MyCertificates from "./pages/MyCertificates";
import MyProjects from "./pages/MyProjects";
import MySkills from "./pages/MySkills";

const router = createHashRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/certificados',
        element: <MyCertificates />
    },
    {
        path: '/projetos',
        element: <MyProjects />
    },
    {
        path: '/habilidades',
        element: <MySkills />
    }
])

export default router