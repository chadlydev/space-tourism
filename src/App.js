import GlobalStyles from './constants/globalStyles';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/home/Home';
import Destination from './routes/destination/Destination';
import Crew from './routes/crew/Crew';
import Technology from './routes/technology/Technology';
import NavBar from './components/nav/NavBar';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

const App = () => {
    const [isMobile, setIsMobile] = useState(false);

    function checkIfMobile() {
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    function handleResize() {
        const windowInnerHeight = window.innerHeight;
        document.documentElement.style.setProperty(
            '--windowInnerHeight',
            `${windowInnerHeight}px`
        );
    }

    useLayoutEffect(() => {
        checkIfMobile();

        if (isMobile) {
            window.addEventListener('resize', handleResize());
        }
    }, []);

    console.log(isMobile);
    return (
        <>
            <GlobalStyles />
            <NavBar />
            <Routes>
                {/* Redirecting default Route */}
                <Route index element={<Navigate to='/home' />} />
                {/* TODO 404 not found page*/}
                <Route path='*' element={<Navigate to='/home' />} />
                <Route path='home' element={<Home />} />
                <Route path='destination' element={<Destination />} />
                <Route path='crew' element={<Crew />} />
                <Route path='technology' element={<Technology />} />
            </Routes>
        </>
    );
};

export default App;
