import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSetInnerHeight = () => {
    const location = useLocation();

    useLayoutEffect(() => {
        const windowInnerHeight = window.innerHeight;
        document.documentElement.style.setProperty(
            '--windowInnerHeight',
            `${windowInnerHeight}px`
        );
    }, [location]);

    return null;
};

export default useSetInnerHeight;
