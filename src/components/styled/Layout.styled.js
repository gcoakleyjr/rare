import styled from 'styled-components';
import { medium, mobile } from "./responsive"

export const PageContainer = styled.div`
width: 100vw;
height: 100vh;
height: ${({ height }) => height + "px"};
overflow: hidden;
display: flex;
flex-direction: column;
position: relative;
background-color: ${props => props.theme.colors.background};
background-image: url("./img/banner.svg");
background-repeat: no-repeat;
background-attachment: fixed;
background-size: contain;
${medium({ backgroundSize: "180%" })}
${mobile({ backgroundSize: "330%" })}
`;

export const Container = styled.main`
    max-width: ${({ maxWidth }) => maxWidth || "860px"};
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    margin: 0 auto;
    padding: 20px 50px;
`;

export const Flex = styled.div`
    gap: ${({ gap }) => gap || '1rem'};
    width: ${({ width }) => width};
    display: flex;
    flex-direction: ${({ direction }) => direction === "column" ? "column" : "row"};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems}; 
    ${({ width }) => width && mobile({ width: "100%" })}
    //if given a hard coded width, set to 100% on mobile view
`;
