import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { useNavigate } from 'react-router-dom';
import NavMenu from './NavMenu';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const DesktopNav = () => {
    const navigate = useNavigate();
    const {
        data: { isTablet },
    } = useMediaQuery();

    const tablet = {
        logo: {
            initial: { opacity: 0, y: -40 },
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring',
                    stiffness: 60,
                    duration: 2,
                    delay: 2.2,
                },
            },
        },
    };

    const desktop = {
        logo: {
            initial: { opacity: 0, x: -20 },
            animate: {
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring',
                    stiffness: 200,
                    delay: 3,
                },
            },
        },
        line: {
            initial: { width: '0%' },
            animate: {
                width: '100%',
                transition: {
                    type: 'tween',
                    duration: 1,
                    delay: 2,
                },
            },
        },
    };

    return (
        <NavContainer>
            <motion.img
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/home')}
                src='/assets/shared/logo.svg'
                alt='logo'
                variants={isTablet ? tablet.logo : desktop.logo}
                initial='initial'
                animate='animate'
            />
            <Line
                variants={isTablet ? tablet.line : desktop.line}
                initial='initial'
                animate='animate'
            />
            <NavMenu />
        </NavContainer>
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
