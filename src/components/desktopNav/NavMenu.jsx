import { NavLink } from '../NavLink';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { variants } from './variants';

const NavMenu = () => {
    const isTablet = useMediaQuery(
        '(min-width: 540px)' && '(max-width: 1023px)'
    );

    return (
        <Nav
            variants={isTablet ? variants.tablet.nav : variants.desktop.nav}
            initial='initial'
            animate='animate'
        >
            <motion.ul
                variants={isTablet ? variants.tablet.ul : variants.desktop.ul}
                initial='initial'
                animate='animate'
            >
                <motion.li
                    variants={
                        isTablet ? variants.tablet.li : variants.desktop.li
                    }
                >
                    <NavLink
                        to='home'
                        activeClassName='active'
                        inactiveClassName='inactive'
                    >
                        <span>00</span>Home
                    </NavLink>
                </motion.li>
                <motion.li
                    variants={
                        isTablet ? variants.tablet.li : variants.desktop.li
                    }
                >
                    <NavLink
                        to='destination'
                        activeClassName='active'
                        inactiveClassName='inactive'
                    >
                        <span>01</span>Destination
                    </NavLink>
                </motion.li>
                <motion.li
                    variants={
                        isTablet ? variants.tablet.li : variants.desktop.li
                    }
                >
                    <NavLink
                        to='crew'
                        activeClassName='active'
                        inactiveClassName='inactive'
                    >
                        <span>02</span>Crew
                    </NavLink>
                </motion.li>
                <motion.li
                    variants={
                        isTablet ? variants.tablet.li : variants.desktop.li
                    }
                >
                    <NavLink
                        to='technology'
                        activeClassName='active'
                        inactiveClassName='inactive'
                    >
                        <span>03</span>Technology
                    </NavLink>
                </motion.li>
            </motion.ul>
        </Nav>
    );
};

export default NavMenu;

const Nav = styled(motion.nav)`
    display: none;

    @media screen and ${BREAKPOINTS.tablet} {
        display: flex;
        height: auto;
        width: auto;
        background-color: var(--color-transparent);
        backdrop-filter: blur(20px);
        margin-right: -5vw;

        ul {
            display: flex;
            list-style: none;
            gap: 36px;

            &:first-child {
                margin-left: 5vw;
            }

            &:last-child {
                margin-right: 5vw;
            }
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        margin-right: -10vw;

        ul {
            gap: 48px;

            &:first-child {
                margin-left: 10vw;
            }

            &:last-child {
                margin-right: 10vw;
            }
        }
    }
`;
