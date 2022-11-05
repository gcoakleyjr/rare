import React from 'react'
import styled from 'styled-components'

import { merchant } from '../data'

import Topbar from '../components/Topbar'
import Background from '../components/Background'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Container = styled.div`
width: 100vw;
height: 100vh;
position: relative;
`

const Checkout = () => {
    return (
        <Container>
            <Topbar merchant={merchant} />
            <div>
            <Content />
            <Footer />
            </div>
            <Background />
        </Container>

    )
}

export default Checkout