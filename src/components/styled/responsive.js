import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};

export const medium = (props) => {
  return css`
    @media only screen and (max-width: 980px) {
      ${props}
    }
  `;
};

export const xlarge = (props) => {
  return css`
    @media only screen and (min-width: 1540px) {
      ${props}
    }
  `;
};
