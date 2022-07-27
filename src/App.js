import GlobalStyles from './constants/globalStyles';
import useSetInnerHeight from './hooks/useSetInnerHeight';
import AnimatedRoutes from './components/AnimatedRoutes';
import MobileNav from './components/mobileNav/MobileNav';
import styled from 'styled-components/macro';
import DesktopNav from './components/desktopNav/DesktopNav';

const App = () => {
    useSetInnerHeight();
    return (
        <>
            <GlobalStyles />
            <Container>
                <DesktopNav />
                <MobileNav />
                <AnimatedRoutes />
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
