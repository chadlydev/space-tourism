import { NavLink } from '../common/NavLink';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <OuterContainer>
            <Link to='home'>
                <img src='/assets/shared/logo.svg' alt='' />
            </Link>
            <InnerContainer>
                <Line />
                <NavBackground />
                <nav>
                    <Ul>
                        <Li>
                            <NavLink
                                to='home'
                                activeClassName='active'
                                inactiveClassName='inactive'
                            >
                                <span>00</span>Home
                            </NavLink>
                        </Li>
                        <Li>
                            <NavLink
                                to='destination'
                                activeClassName='active'
                                inactiveClassName='inactive'
                            >
                                <span>01</span>Destination
                            </NavLink>
                        </Li>
                        <Li>
                            <NavLink
                                to='crew'
                                activeClassName='active'
                                inactiveClassName='inactive'
                            >
                                <span>02</span>Crew
                            </NavLink>
                        </Li>
                        <Li>
                            <NavLink
                                to='technology'
                                activeClassName='active'
                                inactiveClassName='inactive'
                            >
                                <span>03</span>Technology
                            </NavLink>
                        </Li>
                    </Ul>
                </nav>
            </InnerContainer>
        </OuterContainer>
    );
};

export default NavBar;

const OuterContainer = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    position: relative;

    img {
        position: absolute;
        left: 55px;
        top: 25%;
    }
`;

const InnerContainer = styled.div`
    width: 80vw;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 97px;
    width: 60%;
    background-color: var(--color-transparent);
    backdrop-filter: blur(20px);
`;

const Ul = styled.ul`
    display: flex;
    list-style: none;
    gap: 48px;
`;

const Li = styled.li`
    z-index: 1;
`;

const Line = styled.div`
    height: 1px;
    width: 40%;
    z-index: 1;
    background-color: var(--color-dark-200);
`;
