import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Wrapper as W } from '../../components/Wrapper';
import { motion } from 'framer-motion';

export const Wrapper = styled(W)`
    justify-content: space-between;
    height: var(--windowInnerHeight, 100vh);
    padding-top: 120px;

    @media screen and ${BREAKPOINTS.tablet} {
        padding-top: 184px;
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        padding-top: 136px;
        padding-bottom: 131px;
    }
    @media screen and ${BREAKPOINTS.xlDesktop} {
        align-items: center;
        width: clamp(1200px, 80vw, 1800px);
        margin-inline: auto;
        padding-inline: 0;
    }
`;
export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;

    @media screen and ${BREAKPOINTS.smDesktop} {
        text-align: left;
        align-items: flex-start;
        gap: 24px;
    }

    p {
        width: 38ch;
        @media screen and ${BREAKPOINTS.tablet} {
            width: 49ch;
        }
        @media screen and ${BREAKPOINTS.smDesktop} {
            width: 45ch;
        }
    }
`;
export const ExploreButton = styled(motion.button)`
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