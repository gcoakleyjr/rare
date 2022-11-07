import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { Container, Flex } from "./styled/Layout.styled"
import { Button } from "./styled/Button.styled"
import { Header1, RegularText, FooterText, Header2 } from './styled/Text.styled'
import { Link } from './styled/Link.styled'
import { Wallet, ButtonText, Field } from './styled/componentstyle/WalletForm.styled'

function concealString(string, number = 6) {
    const newString = string.substr(0, number) + '...' + string.substr(string.length - number, string.length)
    return newString
}

const MintForm = ({ walletData, user, openModal }) => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    //Pretend sending data
    useEffect(() => {
        if (!isLoading) return
        const timer = setTimeout(() => {
            setIsLoading(false)
            navigate("/mintsuccess")
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [isLoading, navigate])

    return (
        <Container>
            <Flex gap="2rem" direction="column" alignItems="center" width="450px">

                <Flex gap="0.7rem" direction="column" alignItems="center" style={{ textAlign: 'center' }}>
                    <Header1 fontSize="24px">You’re just a few steps away from owning an 8-bit Mafia NFT 🤞</Header1>
                    <RegularText fontSize="14px">
                        You’re logged in as {concealString(user.id)}. <Link textDecoration="underline">Not you?</Link>
                    </RegularText>
                </Flex>

                <Flex direction="column" width="100%">
                    <Header2 fontSize="14px">Connect your wallet</Header2>
                    <Wallet>
                        <Flex gap="1rem" alignItems="center">
                            <img src={walletData.icon} alt="" />
                            <RegularText><strong>{walletData.name}</strong> ({concealString(user.id)})</RegularText>
                        </Flex>
                        <img src="./img/check.svg" alt="" />
                    </Wallet>

                    <ButtonText onClick={openModal}>
                        Change your wallet
                    </ButtonText>
                </Flex>

                <Flex direction="column" width="100%" gap="0.5rem">
                    <Field>
                        <RegularText><b>Subtotal</b></RegularText>
                        <RegularText><b>0 ETH</b></RegularText>
                    </Field>
                    <Field>
                        <RegularText><b>Total</b></RegularText>
                        <RegularText><b>0 ETH</b></RegularText>
                    </Field>
                </Flex>

                <Button disabled={isLoading} onClick={() => setIsLoading(true)} fullWidth>
                    {isLoading ? "Minting ..." : "Mint"}
                </Button>

                <FooterText>Powered by  <img src="./img/logo.svg" alt='Rare Circles Logo' /></FooterText>

            </Flex>
        </Container>
    )
}

export default MintForm