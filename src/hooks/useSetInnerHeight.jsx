import { useLayoutEffect } from 'react';

const useSetInnerHeight = () => {
    useLayoutEffect(() => {
        const windowInnerHeight = window.innerHeight;
        document.documentElement.style.setProperty(
            '--windowInnerHeight',
            `${windowInnerHeight}px`
        );
    }, []);

    return null;
};

export default useSetInnerHeight;
