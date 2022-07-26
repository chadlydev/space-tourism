import { NavLink } from '../NavLink';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import HamburgerMenu from './HamburgerMenu';
import useHandleResize from './useHandleResize';
import { Divider } from '../Divider';

const NavBar = () => {
    const { openMenu, mobile, toggleOpenMenu } = useHandleResize();
    return (
        <Wrapper>
            <Line />
            <img src='/assets/shared/logo.svg' alt='logo' />
            <HamburgerMenu
                openMenu={openMenu}
                toggleOpenMenu={toggleOpenMenu}
            />
            {openMenu && (
                <Nav>
                    <ul>
                        <li
                            onClick={
                                mobile ? () => toggleOpenMenu(false) : null
                            }
                        >
                            <NavLink
                                to='home'
                                className='navbar'
                                activeClassName='navbar--active'
                                inactiveClassName='inactive'
                            >
                                <span>00</span>Home
                            </NavLink>
                        </li>
                        <li
                            onClick={
                                mobile ? () => toggleOpenMenu(false) : null
                            }
                        >
                            <NavLink
                                to='destination'
                                className='navbar'
                                activeClassName='navbar--active'
                                inactiveClassName='inactive'
                            >
                                <span>01</span>Destination
                            </NavLink>
                        </li>
                        <li
                            onClick={
                                mobile ? () => toggleOpenMenu(false) : null
                            }
                        >
                            <NavLink
                                to='crew'
                                className='navbar'
                                activeClassName='navbar--active'
                                inactiveClassName='inactive'
                            >
                                <span>02</span>Crew
                            </NavLink>
                        </li>
                        <li
                            onClick={
                                mobile ? () => toggleOpenMenu(false) : null
                            }
                        >
                            <NavLink
                                to='technology'
                                className='navbar'
                                activeClassName='navbar--active'
                                inactiveClassName='inactive'
                            >
                                <span>03</span>Technology
                            </NavLink>
                        </li>
                    </ul>
                </Nav>
            )}
        </Wrapper>
    );
};

export default NavBar;

const Wrapper = styled.div`
    padding-top: 24px;
    padding-inline: 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media screen and ${BREAKPOINTS.tablet} {
        padding-top: 0;
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        padding-top: 40px;
        padding-inline: 10vw;

        img {
            position: absolute;
            left: 2.5vw;
            top: 64px;
        }
    }
`;

const Nav = styled.nav`
    position: fixed;
    width: 65vw;
    height: 100vh;
    right: 0;
    top: 0;
    background-color: var(--color-transparent);
    backdrop-filter: blur(20px);
    z-index: 10;
    padding-top: 20vh;
    padding-left: 32px;

    @media screen and ${BREAKPOINTS.tablet} {
        position: relative;
        height: auto;
        width: auto;
        top: 0;
        padding-top: 0;
        padding-left: 0;
        padding-inline: 5vw;
        margin-right: -5vw;
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        padding-inline: 10vw;
        margin-right: -10vw;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 20px;
        @media screen and ${BREAKPOINTS.tablet} {
            flex-direction: row;
            gap: 36px;
        }
        @media screen and ${BREAKPOINTS.smDesktop} {
            gap: 48px;
        }
    }
`;

const Line = styled(Divider)`
    display: none;
    @media screen and ${BREAKPOINTS.smDesktop} {
        display: inline;
        background-color: var(--color-light-200);
        margin-right: -30px;
        z-index: 100;
    }
`;
