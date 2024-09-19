import styled from 'styled-components';

export const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

export const DateInfo = styled.div `
    font-family: var(--Gmarket-Sans-Medium);
    font-size: 1rem;
`

export const AreaInfo = styled.div `
    font-family: var(--Gmarket-Sans-Bold);
    font-size: 1.5rem;
    line-height: 1.5;
`