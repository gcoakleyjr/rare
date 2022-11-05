import React from 'react'
import styled from 'styled-components'

import { merchant } from '../data'

import Topbar from '../components/Topbar'
import Background from '../components/Background'
import ConnectWallet from '../components/ConnectWallet'

const Container = styled.main`
width: 100vw;
height: 100vh;
position: relative;
`

const Checkout = () => {
    return (
        <Container>
            <Topbar merchant={merchant} />
            <ConnectWallet />
            <Background />
        </Container>

    )
}

export default Checkout