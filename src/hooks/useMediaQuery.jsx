import { useLayoutEffect, useState } from 'react';

export function useMediaQuery() {
    const [data, setData] = useState({
        isMobile: false,
        isTablet: true,
        isDesktop: false,
    });

    useLayoutEffect(() => {
        if (window.innerWidth >= 320 && window.innerWidth < 540) {
            setData({
                isMobile: true,
                isTablet: false,
                isDesktop: false,
            });
        } else if (window.innerWidth >= 540 && window.innerWidth < 1024) {
            setData({
                isMobile: false,
                isTablet: true,
                isDesktop: false,
            });
        } else if (window.innerWidth >= 1024) {
            setData({
                isMobile: false,
                isTablet: false,
                isDesktop: true,
            });
        }
    }, []);

    return { data };
}
