import GlobalStyles from './constants/globalStyles';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/home/Home';
import Destination from './routes/destination/Destination';
import Crew from './routes/crew/Crew';
import Technology from './routes/technology/Technology';
import NavBar from './components/nav/NavBar';
import Div100vh from 'react-div-100vh';

const App = () => {
    return (
        <Div100vh>
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
        </Div100vh>
    );
};

export default App;
