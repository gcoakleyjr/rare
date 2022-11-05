import React from 'react'
import { TopBarWrapper, MerchantTag, MerchantAvatar, MerchantName } from './styled/TopBar.styled'

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