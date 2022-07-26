import {
    useLocation,
    matchRoutes,
    useResolvedPath,
    Link as L,
} from 'react-router-dom';
import styled from 'styled-components/macro';
import { ROUTES } from '../../constants/routes';
import { BREAKPOINTS } from '../../constants/breakpoints';
import { Circle } from '../../routes/crew/Crew';

const Link = ({
    to,
    exact,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
}) => {
    useLocation();
    let location = useLocation();
    let resolvedPath = useResolvedPath(to);
    let routeMatches = matchRoutes(ROUTES, location);

    let isActive;
    if (exact) {
        isActive = location.pathname === resolvedPath.pathname;
    } else {
        isActive = routeMatches.some(
            match => match.pathname === resolvedPath.pathname
        );
    }

    let allClassNames =
        className +
        (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);

    return <L className={allClassNames} to={to} {...rest} />;
};

export const NavLink = styled(Link)`
    font-family: 'Barlow Condensed', sans-serif;
    font-size: var(--font-size-navlink);
    letter-spacing: 2.7px;
    color: var(--color-light-100);
    text-decoration: none;
    text-transform: uppercase;
    position: relative;

    @media screen and ${BREAKPOINTS.tablet} {
        span {
            display: none;
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        &.inactive {
            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                height: 3px;
                right: 0;
                width: 0;
                background-color: var(--color-light-200);
                transition: 0.3s ease-in-out;
            }

            &:hover:after {
                width: 100%;
                left: 0;
            }
        }
    }

    // NAVBAR
    &.navbar {
        display: flex;
        gap: var(--padding-xs);
        padding-block: 6px;
        border-right: 4px solid transparent;

        @media screen and ${BREAKPOINTS.tablet} {
            padding-block: 38.5px;
        }

        @media screen and ${BREAKPOINTS.smDesktop} {
            span {
                display: inline;
            }
        }

        &--active {
            &:after {
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                width: 4px;
                height: 100%;
                background-color: var(--color-light-100);
            }

            @media screen and ${BREAKPOINTS.tablet} {
                &:after {
                    content: '';
                    position: absolute;
                    height: 3px;
                    width: 100%;
                    background-color: var(--color-light-100);
                }
            }
        }
    }

    // DESTINATION PAGE
    &.destination {
        color: var(--color-accent);
        padding-bottom: 1rem;

        &--active {
            color: var(--color-light-100);
            &:after {
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                height: 3px;
                width: 100%;
                background-color: var(--color-light-100);
            }
        }
    }

    // CREW PAGE
    &.crew {
        & ${Circle} {
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background-color: var(--color-light-200);

            @media screen and ${BREAKPOINTS.smDesktop} {
                width: 16px;
                height: 16px;
            }
        }

        &--active ${Circle} {
            background-color: var(--color-light-100);
        }

        &--inactive:hover ${Circle} {
            background-color: #979797;
        }
    }

    // TECHNOLOGY PAGE
    &.technology {
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
        @media screen and ${BREAKPOINTS.tablet} {
            width: 60px;
            height: 60px;
            font-size: 24px;
        }
        @media screen and ${BREAKPOINTS.smDesktop} {
            width: 80px;
            height: 80px;
            font-size: 32px;

            &--inactive:hover {
                border-color: var(--color-light-100);
            }
        }

        &--active {
            background-color: var(--color-light-100);
            color: var(--color-dark);
            border: none;
        }
    }
`;
