import styled from 'styled-components/macro';
import { Outlet } from 'react-router-dom';
import Background from '../../components/common/Background';

const Technology = () => {
    return (
        <Background page='technology'>
            <Outlet />
        </Background>
    );
};

export default Technology;
