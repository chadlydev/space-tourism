import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../constants/breakpoints';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 5vw;
    padding-top: 96px;
    padding-bottom: 48px;
    text-align: center;
    position: relative;
    
    @media screen and ${BREAKPOINTS.smDesktop} {
        padding-inline: 10vw;
        padding-top: 212px;
        padding-bottom: 112px;
        text-align: left;
        align-items: flex-end;
        flex-direction: row;
`;
