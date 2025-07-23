import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import MyCertificates from "./pages/MyCertificates";
import MyProjects from "./pages/MyProjects";
import MySkills from "./pages/MySkills";

import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ScrollToTop>
                <Home />
            </ScrollToTop>
        )

    },
    {
        path: '/certificados',
        element: (
            <ScrollToTop>
                <MyCertificates />
            </ScrollToTop>
        )
    },
    {
        path: '/projetos',
        element: (
            <ScrollToTop>
                <MyProjects />
            </ScrollToTop>
        )
    },
    {
        path: '/habilidades',
        element: (
            <ScrollToTop>
                <MySkills />
            </ScrollToTop>
        )
    }
])

export default router