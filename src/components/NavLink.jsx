import {
    useLocation,
    matchRoutes,
    useResolvedPath,
    Link as L,
} from 'react-router-dom';
import styled from 'styled-components/macro';
import { ROUTES } from '../constants/routes';
import { BREAKPOINTS } from '../constants/breakpoints';

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
    display: flex;
    gap: var(--padding-xs);
    padding-block: 6px;
    margin-right: 8px;

    &.active {
        &:after {
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            width: 4px;
            height: 100%;
            background-color: var(--color-light-100);
        }
    }

    @media screen and ${BREAKPOINTS.tablet} {
        padding-block: 38.5px;
        margin-right: 0;
        span {
            display: none;
        }

        &.active:after {
            content: '';
            position: absolute;
            height: 3px;
            width: 100%;
            background-color: var(--color-light-100);
        }
    }

    @media screen and ${BREAKPOINTS.smDesktop} {
        span {
            display: inline;
        }
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
`;
