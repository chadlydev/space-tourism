import styled from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { useEffect } from 'react';

const HamburgerMenu = ({ openMenu, toggleOpenMenu }) => {
    const menuBtn = document.querySelector('.menu-btn');

    useEffect(() => {
        if (openMenu) {
            menuBtn?.classList.add('open');
        } else {
            menuBtn?.classList.remove('open');
        }
    }, [openMenu]);

    return (
        <>
            <Div className='menu-btn' onClick={() => toggleOpenMenu(!openMenu)}>
                <Div className='menu-btn__burger' />
            </Div>
        </>
    );
};

export default HamburgerMenu;

const Div = styled.div`
    &.menu-btn__burger {
        width: 24px;
        height: 3px;
        background: var(--color-accent);
        transition: all 0.5s ease-in-out;
        z-index: 100;

        &::before,
        &:after {
            content: '';
            position: absolute;
            width: 24px;
            height: 3px;
            background: var(--color-accent);
            transition: all 0.5s ease-in-out;
            transform: translateY(-7.5px);
        }

        &:after {
            transform: translateY(7.5px);
        }
    }
    &.menu-btn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        &.open .menu-btn__burger {
            background: transparent;
        }
        &.open .menu-btn__burger::before {
            transform: rotate(45deg);
        }
        &.open .menu-btn__burger:after {
            transform: rotate(-45deg);
        }
    }

    @media screen and ${BREAKPOINTS.tablet} {
        &.menu-btn__burger,
        &.menu-btn {
            display: none;
        }
    }
`;
