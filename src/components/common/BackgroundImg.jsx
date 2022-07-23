import styled from 'styled-components/macro';

export const BackgroundImg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: url(${p => p.src}) center no-repeat;
    background-size: cover;
`;
