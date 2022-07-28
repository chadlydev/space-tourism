import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../constants/breakpoints';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.2,
        },
    },
};

const Background = ({ children, page }) => {
    return (
        <AnimatePresence exitBeforeEnter={false}>
            <Bg
                variants={variants}
                initial='initial'
                animate='animate'
                page={page}
            >
                {children}
            </Bg>
        </AnimatePresence>
    );
};

export default Background;

const Bg = styled(motion.div)`
    background: url('/assets/${p => p.page}/background-${p =>
            p.page}-mobile.jpg')
        center no-repeat;
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
