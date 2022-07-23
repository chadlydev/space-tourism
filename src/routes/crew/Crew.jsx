import { Background as Bg } from '../../components/common/Background';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

const Crew = () => {
    return (
        <>
            <Background />
        </>
    );
};

export default Crew;

const Background = styled(Bg)`
    background: url('/assets/crew/background-crew-mobile.jpg') center no-repeat;
    background-size: cover;

    @media screen and ${BREAKPOINTS.smMin} {
        background: url('/assets/crew/background-crew-tablet.jpg') center
            no-repeat;
        background-size: cover;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        background: url('/assets/crew/background-crew-desktop.jpg') center
            no-repeat;
        background-size: cover;
    }
`;
