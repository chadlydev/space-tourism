import { Background as Bg } from '../../components/common/Background';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

const Destination = () => {
    return (
        <>
            <Background />
        </>
    );
};

export default Destination;

const Background = styled(Bg)`
    background: url('/assets/destination/background-destination-mobile.jpg')
        center no-repeat;
    background-size: cover;

    @media screen and ${BREAKPOINTS.smMin} {
        background: url('/assets/destination/background-destination-tablet.jpg')
            center no-repeat;
        background-size: cover;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        background: url('/assets/destination/background-destination-desktop.jpg')
            center no-repeat;
        background-size: cover;
    }
`;
