import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../routes/home/Home';
import Destination from '../routes/destination/Destination';
import Crew from '../routes/crew/Crew';
import Technology from '../routes/technology/Technology';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter='true'>
            <Routes location={location} key={location}>
                {/* Redirecting default Route */}
                <Route index element={<Navigate to='home' />} />
                <Route path='*' element={<Navigate to='/home' />} />
                <Route path='home' element={<Home />} />
                <Route path='destination' element={<Destination />}>
                    <Route path='' element={<Navigate to='moon' />} />
                    <Route path='moon' element={null} />
                    <Route path='mars' element={null} />
                    <Route path='europa' element={null} />
                    <Route path='titan' element={null} />
                </Route>
                <Route path='crew' element={<Crew />}>
                    <Route path='' element={<Navigate to='commander' />} />
                    <Route path='commander' element={null} />
                    <Route path='mission-specialist' element={null} />
                    <Route path='pilot' element={null} />
                    <Route path='flight-engineer' element={null} />
                </Route>
                <Route path='technology' element={<Technology />}>
                    <Route path='' element={<Navigate to='launch-vehicle' />} />
                    <Route path='launch-vehicle' element={null} />
                    <Route path='spaceport' element={null} />
                    <Route path='space-capsule' element={null} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
