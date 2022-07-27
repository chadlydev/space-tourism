import GlobalStyles from './constants/globalStyles';
import useSetInnerHeight from './hooks/useSetInnerHeight';
import AnimatedRoutes from './components/AnimatedRoutes';
import MobileNav from './components/mobileNav/MobileNav';
import styled from 'styled-components/macro';
import DesktopNav from './components/desktopNav/DesktopNav';
import useHistory from './hooks/useHistory';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {
    useSetInnerHeight();
    const { history } = useHistory();
    const location = useLocation();
    const [hasVisited, setHasVisited] = useState(false);

    useEffect(() => {
        if (!history.includes(location.pathname)) setHasVisited(false);
        if (history.includes(location.pathname)) setHasVisited(true);
    }, [location]);

    return (
        <>
            <GlobalStyles />
            <Container>
                <DesktopNav />
                <MobileNav />
                <AnimatedRoutes hasVisited={hasVisited} />
            </Container>
        </>
    );
};

export default App;

const Container = styled.div`
    width: 100vw;
    height: var(--windowInnerHeight, 100vh);
    overflow-x: hidden;
`;
