import styled from 'styled-components/macro';
import { Outlet } from 'react-router-dom';
import Background from '../../components/common/Background';

const Crew = () => {
    return (
        <Background page='crew'>
            <Outlet />
        </Background>
    );
};

export default Crew;
