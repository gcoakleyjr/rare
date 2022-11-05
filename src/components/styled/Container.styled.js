import styled from 'styled-components';


export const Container = styled.header`
    max-width: ${({ maxWidth})  => maxWidth || "860px" };
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 auto;
`;
