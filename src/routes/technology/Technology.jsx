import styled from 'styled-components/macro';
import { Outlet } from 'react-router-dom';
import Background from '../../components/common/Background';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { NavLink } from '../../components/common/NavLink';
import useSetTechnologyData from './useSetTechnologyData';

const Technology = () => {
    const { data } = useSetTechnologyData();

    return (
        <>
            <Background page='technology'>
                <Wrapper>
                    <ContentWrapper>
                        <h5>
                            <span>03</span> Space Launch 101
                        </h5>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink
                                        to='/technology/launch-vehicle'
                                        className='technology'
                                        activeClassName='technology--active'
                                        inactiveClassName='technology--inactive'
                                    >
                                        1
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/technology/spaceport'
                                        className='technology'
                                        activeClassName='technology--active'
                                        inactiveClassName='technology--inactive'
                                    >
                                        2
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/technology/space-capsule'
                                        className='technology'
                                        activeClassName='technology--active'
                                        inactiveClassName='technology--inactive'
                                    >
                                        3
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <FlexColumn>
                            <h6>The Terminology...</h6>
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                        </FlexColumn>
                        <img src={data.imageURL} alt={data.title} />
                    </ContentWrapper>
                </Wrapper>
            </Background>
            <Outlet />
        </>
    );
};

export default Technology;

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
        position: absolute;
        width: 100vw;
        right: 0;
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

    nav {
        padding-top: 238px;
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
        gap: 40px;
        p {
            width: 51ch;
        }
        h5 {
            top: 142px;
            left: 5vw;
        }
        img {
            margin-top: 130px;
        }
        h6 {
            font-size: 16px;
        }
        nav {
            padding-top: 497px;
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        padding-inline: 10vw;
        padding-top: 212px;
        padding-bottom: 112px;
        text-align: left;
        align-items: flex-start;
        justify-content: center;

        nav {
            padding: 0;
        }

        ul {
            gap: 32px;
            flex-direction: column;
        }

        h5 {
            top: 212px;
            left: 10vw;
        }

        p {
            width: 43ch;
        }

        img {
            position: absolute;
            margin: 0;
            width: 515px;
            right: 0;
        }
    }

    @media screen and ${BREAKPOINTS.xlDesktop} {
        align-items: center;
        width: clamp(1200px, 80vw, 1800px);
        margin-inline: auto;
        padding-inline: 0;

        h5 {
            //position: relative;
            //align-self: flex-start;
            top: 0;
            left: 0;
        }

        img {
            position: relative;
            margin: 0;
            width: 515px;
            right: 0;
        }
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    position: relative;
    @media screen and ${BREAKPOINTS.smDesktop} {
        flex-direction: row;
        gap: 72px;
    }

    @media screen and ${BREAKPOINTS.xlDesktop} {
        & ${FlexColumn} {
            margin-right: 256px;
        }
    }
`;
