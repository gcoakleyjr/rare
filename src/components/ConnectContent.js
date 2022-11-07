import React from 'react'

import { Img, ImgWrapper } from './styled/componentstyle/Content.styled'
import { Container, Flex } from "./styled/Layout.styled"
import { Button } from "./styled/Button.styled"
import { Header1, RegularText } from './styled/Text.styled'



const ConnectContent = ({ openModal }) => {
    return (
        <Container>
            <Flex gap="1.5rem" direction="column" alignItems="center">

                <ImgWrapper>
                    <Img src="./img/image1.jpg" alt="image 1" />
                </ImgWrapper>

                <Flex gap="0.3rem" direction="column" alignItems="center" style={{ textAlign: "center" }}>
                    <Header1>You received a mystery NFT 👀</Header1>
                    <RegularText>Connect an Ethereum wallet to claim your NFT.</RegularText>
                </Flex>

                <Button onClick={openModal}>
                    Connect wallet
                </Button>

            </Flex>
        </Container>
    )
}

export default ConnectContent