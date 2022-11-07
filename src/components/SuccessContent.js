import React from 'react'

import { Img, ImgWrapper } from './styled/componentstyle/Content.styled'
import { Container, Flex } from "./styled/Layout.styled"
import { Button } from "./styled/Button.styled"
import { Header1, RegularText } from './styled/Text.styled'
import { Link } from './styled/Link.styled'

const SuccessContent = () => {
    return (
        <Container>
            <Flex gap="1.5rem" direction="column" alignItems="center">

                <ImgWrapper>
                    <Img src="./img/image2.svg" alt="image 1" />
                </ImgWrapper>

                <Flex gap="0.3rem" direction="column" alignItems="center" style={{ textAlign: "center" }}>
                    <Header1>You claimed Mafia #802 🎉</Header1>
                    <RegularText>You can track the transaction on <Link textDecoration="underline">Etherscan.</Link></RegularText>
                </Flex>

                <a href="https://twitter.com/intent/tweet?text=Check%20out%20my%20new%20NFT!%20Oh%20and%20hire%20Giovanni%20:)" target="_blank" rel="noreferrer">
                    <Button icon="./img/twitter.svg" bgColor="#1DA1F2">
                        Share on Twitter
                    </Button>
                </a>

            </Flex>
        </Container>
    )
}

export default SuccessContent