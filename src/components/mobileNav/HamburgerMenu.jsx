import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components/macro';
import MenuToggle from './MenuToggle';
import NavMenu from './NavMenu';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
            <MenuContainer
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={menuVariants}
                transition={menuTransition}
            >
                <ContentContainer>
                    <NavMenu isOpen={isOpen} toggle={toggleMenu} />
                </ContentContainer>
            </MenuContainer>
        </>
    );
};

export default HamburgerMenu;

const MenuContainer = styled(motion.div)`
    width: 65vw;
    height: var(--windowInnerHeight, 100vh);
    background-color: var(--color-transparent);
    backdrop-filter: blur(20px);
    z-index: 90;
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 20vh;
    padding-left: 32px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
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
