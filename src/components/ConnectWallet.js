import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 860px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 auto;
`

const ConnectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
`

const ImgWrapper = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
`

const Img = styled.img`
    width: 100%;
    object-fit: cover;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    align-items: center;
`

const MainText1 = styled.h1`
    font-size: 46px;
    font-weight: 700;
`

const RegularText = styled.p``

const Button = styled.button`
    background: #010101;
    padding: 10px 16px;
    border-radius: 4px;
    color: white;
    cursor: pointer;

`

const ButtonText = styled.span``

const ConnectWallet = () => {
    return (
        <Container>
            <ConnectWrapper>

                <ImgWrapper>
                    <Img src="./img/image1.jpg" alt="image 1" />
                </ImgWrapper>

                <TextWrapper>
                    <MainText1>You received a mystery NFT 👀</MainText1>
                    <RegularText>Connect an Ethereum wallet to claim your NFT.</RegularText>
                </TextWrapper>

                <Button>
                    <ButtonText>Connect wallet</ButtonText>
                </Button>

            </ConnectWrapper>
        </Container>
    )
}

export default ConnectWallet