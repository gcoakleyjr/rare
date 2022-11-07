import styled from 'styled-components';
import { medium } from "../responsive"

export const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px 16px 20px;
  box-sizing: border-box;
  height: 72px;
  ${medium({ flexDirection: 'column', textAlign: 'center', alignItems: 'center', justifyContent: 'flex-end' })}
`;
