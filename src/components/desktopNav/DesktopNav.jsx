import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { useNavigate } from 'react-router-dom';
import NavMenu from './NavMenu';
import { AnimatePresence, motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';
import { variants } from './variants';

const DesktopNav = () => {
    const navigate = useNavigate();
    const isTablet = useMediaQuery(
        '(min-width: 540px)' && '(max-width: 1023px)'
    );

    return (
        <AnimatePresence>
            <NavContainer>
                <motion.img
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate('/home')}
                    src='/assets/shared/logo.svg'
                    alt='logo'
                    variants={variants.tablet.logo}
                    initial='initial'
                    animate='animate'
                />
                <Line
                    as={motion.div}
                    variants={
                        isTablet ? variants.tablet.line : variants.desktop.line
                    }
                    initial='initial'
                    animate='animate'
                />
                <NavMenu />
            </NavContainer>
        </AnimatePresence>
    );
};

export default DesktopNav;

const NavContainer = styled.div`
    display: none;

    @media screen and ${BREAKPOINTS.tablet} {
        display: flex;
        padding-inline: 5vw;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 100;
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        padding-top: 40px;
        padding-inline: 10vw;

        img {
            position: absolute;
            left: 2.5vw;
            top: 64px;
            transition: none;
        }
    }
`;

const Line = styled(motion.div)`
    display: none;
    @media screen and ${BREAKPOINTS.smDesktop} {
        min-height: 1px;
        width: 100%;
        display: inline;
        z-index: 1;
        background-color: var(--color-light-200);
        margin-right: -30px;
    }
`;
