import styled from 'styled-components/macro';

export const Circle = styled.div`
    background-color: ${p => p.dark && 'var(--color-dark-100)'}
        var(--color-light-100);
    border-radius: 100%;
    border: ${p => p.dark && '1px solid var(--color-light-200)'};
    height: ${p => p.size};
    width: ${p => p.size};
    display: flex;
    justify-content: center;
    align-items: center;
`;
