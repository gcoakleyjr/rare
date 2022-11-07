import styled from 'styled-components';
import { darken, getLuminance, lighten } from 'polished'


export const Button = styled.button.attrs(props => ({
    //get background color
    bg: props.light ? props.theme.colors.light : props.bgColor || props.theme.colors.dark
}))`
    background: ${(props) => props.bg};
    padding: 12px 16px;
    border-radius: 4px;
    color: ${(props) => props.light ? props.theme.colors.dark : props.color || props.theme.colors.light};
    box-shadow: ${({ boxShadow }) => boxShadow && "0 2px 5px rgba(0,0,0,0.08)"};
    border: none;
    border: ${({ border }) => border && `1px solid #DCDCDC`};
    width: ${({ fullWidth }) => fullWidth && "100%"};
    font-size: 16px;
    cursor: pointer;
    background: ${props => props.icon && `url(${props.icon}) 12px 50% no-repeat, ${props.bg}`};
    padding: ${props => props.icon && props.fullWidth ? "12px 45px 12px 45px" : props.icon && "12px 16px 12px 45px"};
    transition: background-color 0.2s ease;

    &:disabled {
        cursor: wait;
    };
    //check if background color is dark, if yes, lighten it on hover and vice versa
    &:hover {
        background-color: ${props => getLuminance(props.bg) >= getLuminance("#2b2b2b") ? darken(0.07, props.bg) : lighten(0.18, props.bg)};
    };
`;


export const ButtonText = styled.span``
