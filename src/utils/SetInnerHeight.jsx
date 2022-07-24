import { useLayoutEffect, useState } from 'react';

const SetInnerHeight = () => {
    const [isMobile, setIsMobile] = useState(false);

    function handleResize() {
        const innerHeight = window.innerHeight;
        document.documentElement.style.setProperty(
            '--innerHeight',
            `${innerHeight}px`
        );
    }

    useLayoutEffect(() => {
        if (window.innerWidth < 540) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }

        if (isMobile) handleResize();

        window.addEventListener('resize', handleResize);
    }, []);

    return null;
};

export default SetInnerHeight;
