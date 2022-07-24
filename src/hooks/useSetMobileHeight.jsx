import { useLayoutEffect, useState } from 'react';

const useSetMobileHeight = () => {
    const [isMobile, setIsMobile] = useState(false);

    function checkIfMobile() {
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useLayoutEffect(() => {
        checkIfMobile();

        if (isMobile) {
            const windowInnerHeight = window.innerHeight;
            document.documentElement.style.setProperty(
                '--windowInnerHeight',
                `${windowInnerHeight}px`
            );
        }
    }, []);

    return null;
};

export default useSetMobileHeight;
