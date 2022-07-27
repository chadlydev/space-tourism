import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const variants = {
    initial: {
        opacity: 0,
        scale: 0.5,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            ease: [0, 0.71, 0.2, 1.15],
            duration: 0.8,
            delay: 0.5,
        },
    },
};

export const ExploreButton = ({ children }) => {
    const navigate = useNavigate();

    return (
        <StyledExploreButton
            onClick={() => navigate('/destination')}
            type='button'
            as={motion.div}
        >
            {children}
        </StyledExploreButton>
    );
};

export default ExploreButton;

const StyledExploreButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 100%;
    border: none;
    color: var(--color-dark);
    background: var(--color-light-100);
    font-family: 'Bellefair', serif;
    text-transform: uppercase;
    bottom: 48px;
    position: absolute;
    width: 150px;
    height: 150px;
    font-size: 20px;

    @media screen and ${BREAKPOINTS.tablet} {
        font-size: 32px;
        bottom: 90px;
        width: 242px;
        height: 242px;
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        position: relative;
        width: 274px;
        height: 274px;
        bottom: 0;
        &:after {
            content: '';
            position: absolute;
            z-index: 0;
            width: 274px;
            height: 274px;
            border-radius: 100%;
            transition: all 0.3s ease-in-out;
            border: 0 solid hsla(0, 0%, 100%, 0.15);
        }

        &:hover:after {
            border: 200px solid hsla(0, 0%, 100%, 0.15);
        }
    }
`;
