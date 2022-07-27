import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useHistory = () => {
    const [history, setHistory] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (!history.includes(location.pathname)) {
            setHistory([...history, location.pathname]);
        }
    }, [location]);
    return { history };
};

export default useHistory;
