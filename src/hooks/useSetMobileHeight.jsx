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
    console.log(isMobile);

    useLayoutEffect(() => {
        checkIfMobile();

        if (isMobile) {
            window.addEventListener('resize', setInnerHeight);
        }

        function setInnerHeight() {
            const windowInnerHeight = window.innerHeight;
            document.documentElement.style.setProperty(
                '--windowInnerHeight',
                `${windowInnerHeight}px`
            );
            console.log(windowInnerHeight);
        }
    }, []);

    return null;
};

export default useSetMobileHeight;
