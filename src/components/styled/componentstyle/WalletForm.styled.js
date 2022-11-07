import styled from 'styled-components';

export const Wallet = styled.div`
    width: 100%;
    height: 44px;
    border: 1px solid #DCDCDC; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-radius: 22px;
`;
export const ButtonText = styled.button`
color: ${props => props.theme.colors.muted};
transition: color 0.3s ease;
background: none;
border: none;
cursor: pointer;
display: inherit;
font-size: 12px;
padding: 0;

    &:hover{
    color: ${props => props.theme.colors.dark};
}
`;
export const Field = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    position: relative;

    &::before {
        content: "";
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme.colors.dark};
        position: absolute;
        bottom: 0;
    }
`;


