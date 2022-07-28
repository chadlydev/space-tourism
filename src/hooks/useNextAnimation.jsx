import { useEffect, useState } from 'react';
import useHistory from './useHistory';

const useNextAnimation = query => {
    const { history } = useHistory();
    const [nextAnimation, setNextAnimation] = useState(false);

    useEffect(() => {
        if (history.includes(query)) {
            setNextAnimation(true);
        }
    }, [history]);

    return { nextAnimation };
};

export default useNextAnimation;
