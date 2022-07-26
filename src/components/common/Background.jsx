import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';

const Background = ({ children, page }) => {
    return <Bg page={page}>{children}</Bg>;
};

export default Background;

const Bg = styled.div`
    background: url('/assets/${p => p.page}/background-${p =>
            p.page}-mobile.jpg')
        center no-repeat;
    width: 100vw;
    max-height: var(--windowInnerHeight);
    background-size: cover;
    margin-top: -72px;

    @media screen and ${BREAKPOINTS.tablet} {
        background: url('/assets/${p => p.page}/background-${p =>
                p.page}-tablet.jpg')
            center no-repeat;
        background-size: cover;
        margin-top: -94px;
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        background: url('/assets/${p => p.page}/background-${p =>
                p.page}-desktop.jpg')
            no-repeat;
        background-size: cover;
        margin-top: -136px;
    }
`;
