import { NavLink } from '../NavLink';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const NavMenu = () => {
    const { data } = useMediaQuery();
    const { isTablet } = data;

    const variants = isTablet
        ? {
              nav: {
                  initial: { width: 0 },
                  animate: {
                      width: 'fit-content',
                      transition: {
                          type: 'tween',
                          duration: 1,
                      },
                  },
              },
              ul: {
                  initial: { opacity: 0 },
                  animate: {
                      opacity: 1,
                      transition: {
                          delayChildren: 1,
                          staggerChildren: 0.3,
                      },
                  },
              },
              li: {
                  initial: { opacity: 0, y: -20 },
                  animate: {
                      opacity: 1,
                      y: 0,
                      transition: { type: 'spring', stiffness: 200 },
                  },
              },
          }
        : {
              nav: {
                  initial: { width: '0%' },
                  animate: {
                      width: '100%',
                      transition: {
                          duration: 0.8,
                      },
                  },
              },
              ul: {
                  initial: { opacity: 0 },
                  animate: {
                      opacity: 1,
                      transition: {
                          delayChildren: 1,
                          staggerChildren: 0.2,
                      },
                  },
              },
              li: {
                  initial: { opacity: 0, y: -20 },
                  animate: {
                      opacity: 1,
                      y: 0,
                      transition: { type: 'spring', stiffness: 60 },
                  },
              },
          };
    return (
        <Nav variants={variants.nav} initial='initial' animate='animate'>
            <motion.ul
                variants={variants.ul}
                initial='initial'
                animate='animate'
            >
                <motion.li variants={variants.li}>
                    <NavLink
                        to='home'
                        className='navbar'
                        activeClassName='navbar--active'
                        inactiveClassName='inactive'
                    >
                        <span>00</span>Home
                    </NavLink>
                </motion.li>
                <motion.li variants={variants.li}>
                    <NavLink
                        to='destination'
                        className='navbar'
                        activeClassName='navbar--active'
                        inactiveClassName='inactive'
                    >
                        <span>01</span>Destination
                    </NavLink>
                </motion.li>
                <motion.li variants={variants.li}>
                    <NavLink
                        to='crew'
                        className='navbar'
                        activeClassName='navbar--active'
                        inactiveClassName='inactive'
                    >
                        <span>02</span>Crew
                    </NavLink>
                </motion.li>
                <motion.li variants={variants.li}>
                    <NavLink
                        to='technology'
                        className='navbar'
                        activeClassName='navbar--active'
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
        width: fit-content;
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
        padding-inline: 10vw;
        margin-right: -10vw;

        ul {
            gap: 48px;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
`;
