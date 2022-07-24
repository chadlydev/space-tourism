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
    background: white;
    font-family: 'Bellefair', serif;
    text-transform: uppercase;
    font-size: 32px;

    @media screen and ${BREAKPOINTS.sm} {
        width: 150px;
        height: 150px;
        font-size: 20px;
        //display: none;
    }

    @media screen and ${BREAKPOINTS.smMin} {
        width: 242px;
        height: 242px;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
        width: 274px;
        height: 274px;
        &:after {
            content: '';
            position: absolute;
            z-index: -1;
            width: 274px;
            height: 274px;
            border-radius: 100%;
            transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            -ms-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
            border: 0 solid hsla(0, 0%, 100%, 0.15);
        }

        &:hover:after {
            border: 200px solid hsla(0, 0%, 100%, 0.15);
        }
    }
`;
