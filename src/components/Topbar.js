import React from 'react'

import { TopBarWrapper, MerchantTag, MerchantAvatar, MerchantName } from './styled/componentstyle/TopBar.styled'
import { Link } from './styled/Link.styled'

const Topbar = ({ merchant }) => {
    return (
        <TopBarWrapper>
            <Link to="/">
                <MerchantTag>
                    <MerchantAvatar src={merchant.avatar} alt="merchant avatar" />
                    <MerchantName>{merchant.name}</MerchantName>
                </MerchantTag>
            </Link>
        </TopBarWrapper>
    )
}

export default Topbar