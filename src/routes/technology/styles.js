import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Wrapper as W } from '../../components/Wrapper';

export const Circle = styled.button`
    border-radius: 100%;
    width: 40px;
    height: 40px;
    line-height: 36px;
    background-color: transparent;
    border: 1px solid var(--color-light-200);
    color: var(--color-light-100);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease-in-out 0.5s;

    @media screen and ${BREAKPOINTS.tablet} {
        width: 60px;
        height: 60px;
        font-size: 24px;
    }
    @media screen and ${BREAKPOINTS.smDesktop} {
        width: 80px;
        height: 80px;
        font-size: 32px;

        &.inactive:hover {
            border-color: var(--color-light-100);
        }
    }

    &.active {
        background-color: var(--color-light-100);
        color: var(--color-dark);
        border: none;
    }
`;
export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    h5 {
        position: absolute;
        color: var(--color-light-100);
        display: flex;
        gap: 1rem;
        span {
            color: var(--color-light-200);
        }
    }

    img {
        margin-top: 51px;
        position: absolute;
        width: 100vw;
    }

    @media screen and ${BREAKPOINTS.tablet} {
        h5 {
            top: 142px;
            left: 5vw;
        }

        img {
            margin-top: 130px;
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        flex-direction: row;
        gap: 72px;

        img {
            position: absolute;
            margin: 0;
            width: 515px;
            right: 0;
        }

        & ${FlexColumn} {
            align-self: flex-start;
        }
    }

    @media screen and ${BREAKPOINTS.xlDesktop} {
        position: relative;
        width: 100%;
        justify-content: space-between;
        & ${FlexColumn} {
            margin-left: -600px;
            align-self: center;
        }
    }
`;
export const Wrapper = styled(W)`
    gap: 32px;
    height: var(--windowInnerHeight);

    nav {
        padding-top: 238px;
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
        gap: 40px;
        p {
            width: 51ch;
        }

        h6 {
            font-size: 16px;
        }
        nav {
            padding-top: 497px;
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        nav {
            padding: 0;
        }

        ul {
            gap: 32px;
            flex-direction: column;
        }

        h5 {
            top: 206px;
            left: 10vw;
        }

        p {
            width: 43ch;
        }
    }

    @media screen and ${BREAKPOINTS.xlDesktop} {
        align-items: center;
        width: clamp(1200px, 80vw, 1800px);
        margin-inline: auto;
        padding-inline: 0;

        h5 {
            top: 0;
            left: 0;
        }

        img {
            position: relative;
            margin: 0;
            width: 515px;
            right: 0;
        }
    }
`;
