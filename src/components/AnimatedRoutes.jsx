import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../routes/home/Home';
import Destination from '../routes/destination/Destination';
import Crew from '../routes/crew/Crew';
import Technology from '../routes/technology/Technology';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = ({ hasVisited }) => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter='true'>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Navigate to='home' />} />
                <Route path='*' element={<Navigate to='/home' />} />
                <Route path='home' element={<Home hasVisited={hasVisited} />} />
                <Route
                    path='destination'
                    element={<Destination hasVisited={hasVisited} />}
                />
                <Route path='crew' element={<Crew />} />
                <Route path='technology' element={<Technology />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
