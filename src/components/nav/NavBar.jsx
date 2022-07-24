import { NavLink } from '../common/NavLink';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { useLayoutEffect, useState } from 'react';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';

const NavBar = () => {
    const [openMenu, toggleOpenMenu] = useState(false);
    const [mobile, setMobile] = useState(false);

    useLayoutEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 540) {
                toggleOpenMenu(true);
                setMobile(false);
            }
            if (window.innerWidth < 540) {
                toggleOpenMenu(false);
                setMobile(true);
            }
        }
        handleResize();

        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <OuterContainer>
            <InnerContainer>
                <Line />
                <Link to='home'>
                    <img src='/assets/shared/logo.svg' alt='logo' />
                </Link>
                <HamburgerMenu
                    openMenu={openMenu}
                    toggleOpenMenu={toggleOpenMenu}
                />
                {openMenu && (
                    <Nav>
                        <Ul>
                            <Li
                                onClick={
                                    mobile ? () => toggleOpenMenu(false) : null
                                }
                            >
                                <NavLink
                                    to='home'
                                    activeClassName='active'
                                    inactiveClassName='inactive'
                                >
                                    <span>00</span>Home
                                </NavLink>
                            </Li>
                            <Li
                                onClick={
                                    mobile ? () => toggleOpenMenu(false) : null
                                }
                            >
                                <NavLink
                                    to='destination'
                                    activeClassName='active'
                                    inactiveClassName='inactive'
                                >
                                    <span>01</span>Destination
                                </NavLink>
                            </Li>
                            <Li
                                onClick={
                                    mobile ? () => toggleOpenMenu(false) : null
                                }
                            >
                                <NavLink
                                    to='crew'
                                    activeClassName='active'
                                    inactiveClassName='inactive'
                                >
                                    <span>02</span>Crew
                                </NavLink>
                            </Li>
                            <Li
                                onClick={
                                    mobile ? () => toggleOpenMenu(false) : null
                                }
                            >
                                <NavLink
                                    to='technology'
                                    activeClassName='active'
                                    inactiveClassName='inactive'
                                >
                                    <span>03</span>Technology
                                </NavLink>
                            </Li>
                        </Ul>
                    </Nav>
                )}
            </InnerContainer>
        </OuterContainer>
    );
};

export default NavBar;

const OuterContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    margin-top: 24px;

    @media screen and ${BREAKPOINTS.smMin} {
        margin: 0;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        margin-top: 40px;
    }
`;

const InnerContainer = styled.div`
    width: 90vw;
    margin-inline: 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and ${BREAKPOINTS.lgMin} {
        justify-content: space-between;
        width: 80vw;
        margin-inline: 10vw;

        img {
            position: absolute;
            left: 4vw;
            top: 25%;
        }
    }
`;

const Nav = styled.nav`
    background-color: var(--color-transparent);
    backdrop-filter: blur(20px);

    @media screen and ${BREAKPOINTS.sm} {
        position: absolute;
        top: -24px;
        right: 0;
        height: var(--windowInnerHeight);
        width: 65vw;
        padding-top: 20vh;
        padding-left: 32px;
    }

    @media screen and ${BREAKPOINTS.smMin} {
        position: relative;
        margin-right: -5vw;
        padding-inline: 5vw;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        padding-inline: 10vw;
        margin-right: -10vw;
    }
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 20px;

    @media screen and ${BREAKPOINTS.smMin} {
        flex-direction: row;
        gap: 36px;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        gap: 48px;
    }
`;

const Li = styled.li``;

const Line = styled.div`
    height: 1px;
    width: 100%;
    margin-right: -30px;
    z-index: 10;
    background-color: var(--color-light-200);
    @media screen and ${BREAKPOINTS.lg} {
        display: none;
    }
`;
