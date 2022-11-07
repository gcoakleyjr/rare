import styled from "styled-components";
import { medium, mobile } from "./responsive"

//adjusted text size and colors currently work, refactor later to not use important
const TextBase = styled.span`
    text-align: ${({ textAlign }) => textAlign};
    font-size: ${({ fontSize }) => fontSize && fontSize + "!important"};
    font-weight: ${({ weight }) => weight && weight + "!important"};
    color: ${({ color }) => color && color + "!important"};
`

export const Header1 = styled(TextBase).attrs({
    as: 'h1'
})`
    font-size: 46px;
    font-weight: 700;
    ${medium({ fontSize: '32px' })}
    ${({ fontSize }) => fontSize && medium({ fontSize: "18px !important" })}
    ${mobile({ fontSize: '28px' })}
    ${({ fontSize }) => fontSize && mobile({ fontSize: "16px !important" })}
`;

export const Header2 = styled(TextBase).attrs({
    as: 'h2'
})`
    font-size: 24px;
    font-weight: 700;
    ${medium({ fontSize: '18px !important' })}
`;

export const RegularText = styled(TextBase).attrs({
    as: 'p'
})`
    font-size: 16px;
    ${medium({ fontSize: '12px !important' })}
`;

export const FooterText = styled(TextBase).attrs({
    as: 'p'
})`
    font-size: 12px;
    color: ${props => props.theme.colors.muted};
`;

export const FooterTextB = styled.span`
    color: black;
`;

