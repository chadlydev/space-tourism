import styled from 'styled-components/macro';
import { Background as Bg } from '../../components/common/Background';
import { BREAKPOINTS } from '../../constants/breakpoints';

const Home = () => {
    return (
        <>
            <Background />
            <div>{/*<h1>Home</h1>*/}</div>
        </>
    );
};

export default Home;

const Background = styled(Bg)`
    background: url('/assets/home/background-home-mobile.jpg') center no-repeat;
    background-size: cover;

    @media screen and ${BREAKPOINTS.smMin} {
        background: url('/assets/home/background-home-tablet.jpg') center
            no-repeat;
        background-size: cover;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        background: url('/assets/home/background-home-desktop.jpg') center
            no-repeat;
        background-size: cover;
    }
`;
