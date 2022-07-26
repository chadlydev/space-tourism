import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Outlet } from 'react-router-dom';
import { NavLink } from '../../components/common/NavLink';
import { Divider } from '../../components/common/Divider';
import useSetDestinationData from './useSetDestinationData';
import Background from '../../components/common/Background';

const Destination = () => {
    const { data } = useSetDestinationData();

    return (
        <>
            <Background page='destination'>
                <Wrapper>
                    <Left>
                        <h5>
                            <span>01</span>Pick your destination
                        </h5>
                        <img
                            src={`/assets/destination/image-${data.name}.png`}
                            alt='moon'
                        />
                    </Left>
                    <Right>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink
                                        to='/destination/moon'
                                        className='destination'
                                        activeClassName='destination--active'
                                        inactiveClassName='inactive'
                                    >
                                        Moon
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/destination/mars'
                                        className='destination'
                                        activeClassName='destination--active'
                                        inactiveClassName='inactive'
                                    >
                                        Mars
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/destination/europa'
                                        className='destination'
                                        activeClassName='destination--active'
                                        inactiveClassName='inactive'
                                    >
                                        Europa
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/destination/titan'
                                        className='destination'
                                        activeClassName='destination--active'
                                        inactiveClassName='inactive'
                                    >
                                        Titan
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <h2>{data.name}</h2>
                        <p>{data.content}</p>
                        <Divider />
                        <Flex>
                            <FlexColumn>
                                <h6>Avg. distance</h6>
                                <h4>{data.distance}</h4>
                            </FlexColumn>
                            <FlexColumn>
                                <h6>Est. travel time</h6>
                                <h4>{data.travelTime}</h4>
                            </FlexColumn>
                        </Flex>
                    </Right>
                </Wrapper>
            </Background>
            <Outlet />
        </>
    );
};

export default Destination;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    height: max(var(--windowInnerHeight), 100%, 100vh);
    text-align: center;
    padding-inline: 5vw;
    padding-top: 96px;
    padding-bottom: 48px;

    img {
        width: 170px;
        height: 170px;
    }
    h5 {
        color: var(--color-light-100);
        display: flex;
        gap: 1rem;
        span {
            color: var(--color-light-200);
        }
    }
    h2 {
        margin-bottom: -32px;
    }
    h4 {
        font-size: var(--font-size-subheading-1);
    }
    ul {
        display: flex;
        list-style: none;
        gap: 28px;
        padding-bottom: 1rem;
    }
    p {
        width: 37ch;
    }

    @media screen and ${BREAKPOINTS.tablet} {
        height: var(--windowInnerHeight, 100vh);
        justify-content: flex-end;
        padding-top: 142px;
        gap: 40px;
        img {
            width: 300px;
            height: 300px;
        }
        ul {
            gap: 36px;
        }
        p {
            width: 62ch;
        }
        h5 {
            position: absolute;
            top: 142px;
            left: 5vw;
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        padding-inline: 10vw;
        padding-top: 212px;
        padding-bottom: 112px;
        text-align: left;
        align-items: flex-end;
        flex-direction: row;
        justify-content: space-between;

        h5 {
            top: 212px;
            left: 10vw;
        }

        p {
            width: 44ch;
        }
    }

    @media screen and ${BREAKPOINTS.mdDesktop} {
        img {
            margin-left: 4rem;
            width: 445px;
            height: 445px;
        }

        h5 {
            position: relative;
            align-self: flex-start;
            top: 0;
            left: 0;
        }
    }
    @media screen and ${BREAKPOINTS.lgDesktop} {
        img {
            width: 600px;
            height: 600px;
        }
    }

    @media screen and ${BREAKPOINTS.xlDesktop} {
        align-items: center;
        width: clamp(1200px, 80vw, 1800px);
        margin-inline: auto;
        padding-inline: 0;
    }
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media screen and ${BREAKPOINTS.tablet} {
        flex-direction: row;
        gap: 64px;
    }
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    @media screen and ${BREAKPOINTS.smDesktop} {
        height: 100%;
        justify-content: flex-end;
    }
    @media screen and ${BREAKPOINTS.mdDesktop} {
        justify-content: space-between;
    }
    @media screen and ${BREAKPOINTS.xlDesktop} {
        gap: 90px;
        justify-content: center;
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    @media screen and ${BREAKPOINTS.smDesktop} {
        align-items: flex-start;
        flex-basis: 30%;
        justify-content: flex-end;
        height: 100%;
        gap: 36px;
    }
    @media screen and ${BREAKPOINTS.xlDesktop} {
        justify-content: center;
    }
`;
