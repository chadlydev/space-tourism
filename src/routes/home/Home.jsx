import styled from 'styled-components/macro';
import { Background as Bg } from '../../components/common/Background';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { ExploreButton } from './ExploreButton';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Background />
            <Container>
                <Banner>
                    <h5>So, you want to travel to</h5>
                    <h1>Space</h1>
                    <P>
                        Let’s face it: if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </P>
                </Banner>
                <ExploreButton as={Link} to='/destination' type='button'>
                    Explore
                </ExploreButton>
            </Container>
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    height: var(--windowInnerHeight, 100vh);
    padding-top: 112px;
    padding-bottom: 48px;

    @media screen and ${BREAKPOINTS.smMin} {
        padding-bottom: 90px;
        padding-top: 221px;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        flex-direction: row;
        width: 80vw;
        height: clamp(900px, var(--windowInnerHeight, 100vh), 1400px);
        margin-inline: auto;
        justify-content: space-between;
        align-items: flex-end;
        padding-block: 131px;
    }
`;

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media screen and ${BREAKPOINTS.lg} {
        text-align: center;
        align-items: center;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        gap: 24px;
    }
`;

const P = styled.p`
    @media screen and ${BREAKPOINTS.sm} {
        width: 38ch;
    }

    @media screen and ${BREAKPOINTS.smMin} {
        width: 49ch;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        width: 45ch;
    }
`;
