import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Wrapper as W } from '../../components/Wrapper';
import { Divider } from '../../components/Divider';

export const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: var(--color-light-200);
    cursor: pointer;
    transition: all ease-in-out 0.5s;

    @media screen and ${BREAKPOINTS.smDesktop} {
        width: 16px;
        height: 16px;
    }

    &.active {
        background-color: var(--color-light-100);
    }

    &.inactive:hover {
        background-color: #979797;
    }
`;
export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
export const Wrapper = styled(W)`
    gap: 32px;
    height: var(--windowInnerHeight);

    img {
        margin-top: 51px;

        height: 222px;
    }

    ${Divider} {
        margin-top: -32px;
        width: 90vw;
    }

    h5 {
        position: absolute;
        color: var(--color-light-100);
        display: flex;
        gap: 1rem;
        span {
            color: var(--color-light-200);
        }
    }
    h4 {
        color: var(--color-light-200);
    }

    ul {
        display: flex;
        list-style: none;
        gap: 16px;
    }
    p {
        width: 39ch;
    }

    @media screen and ${BREAKPOINTS.tablet} {
        height: var(--windowInnerHeight, 100vh);
        justify-content: flex-end;
        padding-top: 206px;
        gap: 40px;
        flex-direction: column-reverse;
        p {
            width: 48ch;
        }
        h5 {
            top: 142px;
            left: 5vw;
        }
        img {
            position: absolute;
            bottom: 0;
            height: 500px;
        }
        h3 {
            margin-top: -8px;
        }

        ${Divider} {
            display: none;
        }

        ${FlexColumn} {
            order: -2;
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        justify-content: space-between;
        flex-direction: row;

        ul {
            gap: 24px;
        }

        h5 {
            order: -2;
            top: 212px;
            left: 10vw;
        }

        p {
            width: 44ch;
        }

        img {
            position: absolute;
            bottom: 0;
            height: 650px;
            right: 10vw;
        }
    }

    @media screen and ${BREAKPOINTS.mdDesktop} {
        h5 {
            position: relative;
            align-self: flex-start;
            top: 0;
            left: 0;
        }
    }

    @media screen and ${BREAKPOINTS.xlDesktop} {
        align-items: center;
        width: clamp(1200px, 80vw, 1800px);
        margin-inline: auto;
        padding-inline: 0;
    }
`;
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    @media screen and ${BREAKPOINTS.tablet} {
        nav {
            order: -1;
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        height: 100%;
        justify-content: space-between;
        align-items: flex-start;
    }
    @media screen and ${BREAKPOINTS.mdDesktop} {
        justify-content: space-between;
    }
    @media screen and ${BREAKPOINTS.xlDesktop} {
        gap: 90px;
        justify-content: center;
    }
`;