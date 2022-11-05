import React from 'react'
import { ConnectWrapper, Img, TextWrapper, ImgWrapper } from './styled/Content.styled'
import { Container } from "./styled/Container.styled"
import { Button, ButtonText } from "./styled/Button.styled"
import { Header1, RegularText } from './styled/Text.styled'



const Content = () => {
    return (
        <Container>
            <ConnectWrapper>

                <ImgWrapper>
                    <Img src="./img/image1.jpg" alt="image 1" />
                </ImgWrapper>

                <TextWrapper>
                    <Header1>You received a mystery NFT 👀</Header1>
                    <RegularText>Connect an Ethereum wallet to claim your NFT.</RegularText>
                </TextWrapper>

                <Button>
                    <ButtonText>Connect wallet</ButtonText>
                </Button>

            </ConnectWrapper>
        </Container>
    )
}

export default Content