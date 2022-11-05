import styled from 'styled-components';

export const TopBarWrapper = styled.nav`
    height: 72px;
    position: absolute;
    display: flex;
    align-items: flex-end;
    margin-left: 24px;
`;
export const MerchantTag = styled.div`
    height: 40px;
    width: 130px;
    border-radius: 75px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 4px 16px 4px 4px;
    gap: 8px;
`;
export const MerchantAvatar = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`;
export const MerchantName = styled.span`
font-weight: 600;
font-size: 14px;
`;
