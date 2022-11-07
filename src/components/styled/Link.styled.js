import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
text-decoration: ${({ textDecoration }) => textDecoration || "none"};
color: ${(props) => props.color || props.theme.colors.dark}
`