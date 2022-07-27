import React from 'react';
import styled from 'styled-components/macro';
import HamburgerMenu from './HamburgerMenu';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const variants = {
    hide: {
        transform: 'translateY(-5em)',
        opacity: 0,
    },
    show: {
        transform: 'translateY(0em)',
        opacity: 1,
        transition: {
            duration: 1,
            type: 'spring',
            stiffness: 60,
        },
    },
};

const MobileNav = () => {
    const navigate = useNavigate();

    return (
        <NavContainer variants={variants} initial='hide' animate='show'>
            <img
                onClick={() => navigate('/home')}
                src='/assets/shared/logo.svg'
                alt='logo'
            />
            <HamburgerMenu />
        </NavContainer>
    );
};

export default MobileNav;

const NavContainer = styled(motion.div)`
    display: flex;
    padding-inline: 5vw;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 100;
    padding-top: 24px;

    @media screen and ${BREAKPOINTS.tablet} {
        display: none;
    }
`;
