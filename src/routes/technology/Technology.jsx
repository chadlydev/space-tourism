import { Background as Bg } from '../../components/common/Background';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

const Technology = () => {
    return (
        <>
            <Background />
        </>
    );
};

export default Technology;

const Background = styled(Bg)`
    background: url('/assets/technology/background-technology-mobile.jpg')
        center no-repeat;
    background-size: cover;

    @media screen and ${BREAKPOINTS.smMin} {
        background: url('/assets/technology/background-technology-tablet.jpg')
            center no-repeat;
        background-size: cover;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        background: url('/assets/technology/background-technology-desktop.jpg')
            center no-repeat;
        background-size: cover;
    }
`;
