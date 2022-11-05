import React from 'react'
import styled from 'styled-components'

const TopBarWrapper = styled.header`
    height: 72px;
    position: absolute;
    display: flex;
    align-items: flex-end;
    margin-left: 24px;
`

const MerchantTag = styled.div`
    height: 40px;
    width: 130px;
    border-radius: 75px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 4px 16px 4px 4px;
    gap: 8px;
`

const MerchantAvatar = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`

const MerchantName = styled.span`
font-weight: 600;
font-size: 14px;
`

const Topbar = ({ merchant }) => {
    return (
        <TopBarWrapper>
            <MerchantTag>
                <MerchantAvatar src={merchant.avatar} alt="merchant avatar" />
                <MerchantName>{merchant.name}</MerchantName>
            </MerchantTag>
        </TopBarWrapper>
    )
}

export default Topbar