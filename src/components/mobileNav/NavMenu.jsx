import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import { NavLink } from '../NavLink';

const variants = {
    show: {
        transform: 'translateX(0em)',
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
        },
    },
    hide: {
        transform: 'translateX(5em)',
        opacity: 0,
        transition: {
            delayChildren: 0.05,
            staggerChildren: 0.05,
        },
    },
};

const NavMenu = ({ isOpen, toggle }) => {
    return (
        <nav>
            <Ul
                initial={false}
                variants={variants}
                animate={isOpen ? 'show' : 'hide'}
            >
                <motion.li variants={variants}>
                    <NavLink
                        onClick={toggle}
                        to='home'
                        activeClassName='active'
                        inactiveClassName='inactive'
                    >
                        <span>00</span>Home
                    </NavLink>
                </motion.li>
                <motion.li variants={variants}>
                    <NavLink
                        onClick={toggle}
                        to='destination'
                        activeClassName='active'
                        inactiveClassName='inactive'
                    >
                        <span>01</span>Destination
                    </NavLink>
                </motion.li>
                <motion.li variants={variants}>
                    <NavLink
                        onClick={toggle}
                        to='crew'
                        activeClassName='active'
                        inactiveClassName='inactive'
                    >
                        <span>02</span>Crew
                    </NavLink>
                </motion.li>
                <motion.li variants={variants}>
                    <NavLink
                        onClick={toggle}
                        to='technology'
                        activeClassName='active'
                        inactiveClassName='inactive'
                    >
                        <span>03</span>Technology
                    </NavLink>
                </motion.li>
            </Ul>
        </nav>
    );
};

export default NavMenu;

const Ul = styled(motion.ul)`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 20px;
`;
