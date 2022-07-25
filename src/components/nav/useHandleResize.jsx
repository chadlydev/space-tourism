import { useLayoutEffect, useState } from 'react';

const useHandleResize = () => {
    const [openMenu, toggleOpenMenu] = useState(false);
    const [mobile, setMobile] = useState(false);

    useLayoutEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 540) {
                toggleOpenMenu(true);
                setMobile(false);
            }
            if (window.innerWidth < 540) {
                toggleOpenMenu(false);
                setMobile(true);
            }
        }
        handleResize();

        window.addEventListener('resize', handleResize);
    }, []);

    return { openMenu, mobile, toggleOpenMenu };
};

export default useHandleResize;
