import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

export const ExploreButton = styled.button`
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
