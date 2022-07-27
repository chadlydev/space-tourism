import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { ExploreButton } from './ExploreButton';
import Background from '../../components/Background';
import { Wrapper as W } from '../../components/Wrapper';

const Home = () => {
    return (
        <Background page='home'>
            <Wrapper>
                <Banner>
                    <h5>So, you want to travel to</h5>
                    <h1>Space</h1>
                    <p>
                        Let’s face it: if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </Banner>
                <ExploreButton>Explore</ExploreButton>
            </Wrapper>
        </Background>
    );
};

export default Home;

const Wrapper = styled(W)`
    justify-content: space-between;
    height: var(--windowInnerHeight, 100vh);
    padding-top: 120px;

    @media screen and ${BREAKPOINTS.tablet} {
        padding-top: 184px;
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        padding-top: 136px;
        padding-bottom: 131px;
    }
    @media screen and ${BREAKPOINTS.xlDesktop} {
        align-items: center;
        width: clamp(1200px, 80vw, 1800px);
        margin-inline: auto;
        padding-inline: 0;
    }
`;

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;

    @media screen and ${BREAKPOINTS.smDesktop} {
        text-align: left;
        align-items: flex-start;
        gap: 24px;
    }

    p {
        width: 38ch;
        @media screen and ${BREAKPOINTS.tablet} {
            width: 49ch;
        }
        @media screen and ${BREAKPOINTS.smDesktop} {
            width: 45ch;
        }
    }
`;
