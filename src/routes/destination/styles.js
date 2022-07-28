import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { motion } from 'framer-motion';
import { Wrapper as W } from '../../components/Wrapper';

export const NavLink = styled.button`
    color: var(--color-accent);
    padding-bottom: 1rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: var(--font-size-navlink);
    letter-spacing: 2.7px;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    border: none;
    background: none;
    cursor: pointer;

    &.active {
        color: var(--color-light-100);
        &:after {
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            height: 3px;
            width: 100%;
            background-color: var(--color-light-100);
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        &.inactive {
            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                height: 3px;
                right: 0;
                width: 0;
                background-color: var(--color-light-200);
                transition: 0.3s ease-in-out;
            }

            &:hover:after {
                width: 100%;
                left: 0;
            }
        }
    }
`;
export const Wrapper = styled(W)`
    gap: 32px;
    height: max(100%, var(--windowInnerHeight), 100vh);

    img {
        width: 170px;
        height: 170px;
    }
    h5 {
        color: var(--color-light-100);
        display: flex;
        gap: 12px;
        span {
            color: var(--color-light-200);
        }
    }
    h2 {
        margin-bottom: -32px;
    }
    h4 {
        font-size: var(--font-size-subheading-1);
    }
    ul {
        display: flex;
        list-style: none;
        gap: 28px;
    }
    p {
        width: 37ch;
    }

    @media screen and ${BREAKPOINTS.tablet} {
        height: var(--windowInnerHeight, 100vh);
        justify-content: flex-end;
        padding-top: 142px;
        padding-inline: 10vw;
        gap: 40px;
        img {
            width: 300px;
            height: 300px;
        }
        ul {
            gap: 36px;
        }
        p {
            width: 62ch;
        }
        h5 {
            position: absolute;
            top: 142px;
            left: 5vw;
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        justify-content: space-between;

        h5 {
            top: 206px;
            left: 10vw;
        }

        p {
            width: 44ch;
        }
    }

    @media screen and ${BREAKPOINTS.mdDesktop} {
        img {
            margin-left: 4rem;
            width: 445px;
            height: 445px;
        }
    }
    @media screen and ${BREAKPOINTS.lgDesktop} {
        img {
            width: 600px;
            height: 600px;
        }
    }

    @media screen and ${BREAKPOINTS.xlDesktop} {
        align-items: center;
        width: clamp(1200px, 80vw, 1800px);
        margin-inline: auto;
        padding-inline: 0;

        h5 {
            position: relative;
            top: 0;
            left: 0;
        }
    }
`;
export const Flex = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media screen and ${BREAKPOINTS.tablet} {
        flex-direction: row;
        gap: 64px;
    }
`;

export const FlexColumn = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    @media screen and ${BREAKPOINTS.smDesktop} {
        height: 100%;
        justify-content: flex-end;
    }
    @media screen and ${BREAKPOINTS.mdDesktop} {
        //justify-content: space-between;
    }
    @media screen and ${BREAKPOINTS.xlDesktop} {
        gap: 90px;
        justify-content: center;
        align-items: flex-start;
    }
`;
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    width: 100%;
    @media screen and ${BREAKPOINTS.smDesktop} {
        align-items: flex-start;
        flex-basis: 30%;
        justify-content: flex-end;
        height: 100%;
        gap: 36px;
    }
    @media screen and ${BREAKPOINTS.xlDesktop} {
        justify-content: center;
    }
`;
