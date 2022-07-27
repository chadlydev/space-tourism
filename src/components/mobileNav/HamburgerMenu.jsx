import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import MenuToggle from './MenuToggle';
import NavMenu from './NavMenu';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        window.addEventListener('scroll', () => setIsOpen(false));
        return () => {
            window.removeEventListener('scroll', () => setIsOpen(false));
        };
    });

    return (
        <>
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
            <MenuContainer
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={menuVariants}
                transition={menuTransition}
                onScroll={toggleMenu}
            >
                <NavMenu isOpen={isOpen} toggle={toggleMenu} />
            </MenuContainer>
        </>
    );
};

export default HamburgerMenu;

const MenuContainer = styled(motion.div)`
    width: 65vw;
    height: max(var(--windowInnerHeight), 100%, 100vh);
    background-color: var(--color-transparent);
    backdrop-filter: blur(20px);
    z-index: 90;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding-top: 20vh;
    padding-left: 32px;
`;

const menuVariants = {
    open: {
        transform: 'translateX(3%)',
    },
    closed: {
        transform: 'translateX(103%)',
    },
};

const menuTransition = {
    type: 'spring',
    duration: 1,
    stiffness: 33,
    delay: 0.1,
};
