import GlobalStyles from './constants/globalStyles';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/home/Home';
import Destination from './routes/destination/Destination';
import Crew from './routes/crew/Crew';
import Technology from './routes/technology/Technology';
import NavBar from './components/nav/NavBar';
import useSetInnerHeight from './hooks/useSetInnerHeight';
import LaunchVehicle from './routes/technology/LaunchVehicle';
import Spaceport from './routes/technology/Spaceport';
import SpaceCapsule from './routes/technology/SpaceCapsule';

const App = () => {
    useSetInnerHeight();
    return (
        <>
            <GlobalStyles />
            <NavBar />
            <Routes>
                {/* Redirecting default Route */}
                <Route index element={<Navigate to='home' />} />
                {/* TODO 404 not found page*/}
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
                    <Route path='launch-vehicle' element={<LaunchVehicle />} />
                    <Route path='spaceport' element={<Spaceport />} />
                    <Route path='space-capsule' element={<SpaceCapsule />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
