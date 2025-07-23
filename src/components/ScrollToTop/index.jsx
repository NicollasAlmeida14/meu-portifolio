import { useEffect } from "react";

import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)

        const handleBeforeUnload = () => {
            window.scrollTo(0, 0)
        }

        window.addEventListener('beforeunload', handleBeforeUnload)
    }, [pathname])

    return children
}