import styled from 'styled-components/macro';
import { Outlet } from 'react-router-dom';
import Background from '../../components/Background';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { NavLink } from '../../components/NavLink';
import useSetCrewData from './useSetCrewData';
import { Divider } from '../../components/Divider';

const Crew = () => {
    const { data } = useSetCrewData();
    return (
        <>
            <Background page='crew'>
                <Wrapper>
                    <ContentWrapper>
                        <img src={data.imageURL} alt={data.name} />
                        <Divider />
                        <h5>
                            <span>02</span>Meet your crew
                        </h5>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink
                                        to='/crew/commander'
                                        className='crew'
                                        activeClassName='crew--active'
                                        inactiveClassName='crew--inactive'
                                    >
                                        <Circle />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/crew/mission-specialist'
                                        className='crew'
                                        activeClassName='crew--active'
                                        inactiveClassName='crew--inactive'
                                    >
                                        <Circle />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/crew/pilot'
                                        className='crew'
                                        activeClassName='crew--active'
                                        inactiveClassName='crew--inactive'
                                    >
                                        <Circle />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/crew/flight-engineer'
                                        className='crew'
                                        activeClassName='crew--active'
                                        inactiveClassName='crew--inactive'
                                    >
                                        <Circle />
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <FlexColumn>
                            <h4>{data.title}</h4>
                            <h3>{data.name}</h3>
                            <p>{data.content}</p>
                        </FlexColumn>
                    </ContentWrapper>
                </Wrapper>
            </Background>

            <Outlet />
        </>
    );
};

export default Crew;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    height: var(--windowInnerHeight);
    text-align: center;
    padding-inline: 5vw;
    padding-top: 96px;
    padding-bottom: 48px;

    img {
        margin-top: 51px;

        height: 222px;
    }

    ${Divider} {
        margin-top: -32px;
        width: 90vw;
    }

    h5 {
        position: absolute;
        color: var(--color-light-100);
        display: flex;
        gap: 1rem;
        span {
            color: var(--color-light-200);
        }
    }
    h4 {
        color: var(--color-light-200);
    }

    ul {
        display: flex;
        list-style: none;
        gap: 16px;
    }
    p {
        width: 39ch;
    }

    @media screen and ${BREAKPOINTS.tablet} {
        height: var(--windowInnerHeight, 100vh);
        justify-content: flex-end;
        padding-top: 206px;
        gap: 40px;
        flex-direction: column-reverse;
        p {
            width: 51ch;
        }
        h5 {
            top: 142px;
            left: 5vw;
        }
        img {
            position: absolute;
            bottom: 0;
            height: 500px;
        }
        h3 {
            margin-top: -8px;
        }

        ${Divider} {
            display: none;
        }

        ${FlexColumn} {
            order: -2;
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

        ul {
            gap: 24px;
        }

        h5 {
            order: -2;
            top: 212px;
            left: 10vw;
        }

        p {
            width: 44ch;
        }

        img {
            position: absolute;
            bottom: 0;
            height: 650px;
            right: 10vw;
        }
    }

    @media screen and ${BREAKPOINTS.mdDesktop} {
        h5 {
            position: relative;
            align-self: flex-start;
            top: 0;
            left: 0;
        }
    }

    @media screen and ${BREAKPOINTS.xlDesktop} {
        align-items: center;
        width: clamp(1200px, 80vw, 1800px);
        margin-inline: auto;
        padding-inline: 0;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    @media screen and ${BREAKPOINTS.tablet} {
        nav {
            order: -1;
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        height: 100%;
        justify-content: space-between;
        align-items: flex-start;
    }
    @media screen and ${BREAKPOINTS.mdDesktop} {
        justify-content: space-between;
    }
    @media screen and ${BREAKPOINTS.xlDesktop} {
        gap: 90px;
        justify-content: center;
    }
`;

export const Circle = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: var(--color-light-200);
`;
