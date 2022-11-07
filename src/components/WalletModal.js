import React from 'react'
import Modal from 'react-modal';

import { FooterText, Header2, RegularText } from './styled/Text.styled';
import { Button } from './styled/Button.styled';
import { Link } from "./styled/Link.styled"
import { Flex } from './styled/Layout.styled';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0, 0.65)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
        padding: '40px',
        borderRadius: '8px'
    },
};


Modal.setAppElement('#root');

const WalletModal = ({ modalIsOpen, closeModal }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Connect Wallet Modal"
            closeTimeoutMS={300}
        >
            <Flex
                direction="column"
                alignItems="center"
                width="450px"
                gap="2em"
            >

                <Flex direction="column" alignItems="center" style={{ textAlign: 'center' }}>
                    <Header2>Connect your wallet to claim</Header2>
                    <RegularText fontSize="14px">Use an Existing ETH wallet to mint an NFT.</RegularText>
                </Flex>

                <Flex direction="column" width="100%">
                    <Link to='/connectwallet/metamask'>
                        <Button
                            boxShadow
                            light
                            fullWidth
                            icon="./img/metamask.svg"
                            border
                            onClick={closeModal}
                        >
                            <strong>MetaMask</strong>
                        </Button>
                    </Link>

                    <Link to='/connectwallet/coinbase'>
                        <Button
                            boxShadow
                            fullWidth
                            light
                            icon="./img/coinbase.svg"
                            border
                            onClick={closeModal}
                        >
                            <strong>Coinbase Wallet</strong>
                        </Button>
                    </Link>
                </Flex>

                <Link textDecoration="underline" >
                    <RegularText>Learn more about wallets</RegularText>
                </Link>

                <FooterText>Powered by  <img src="./img/logo.svg" alt='Rare Circles Logo' /></FooterText>
            </Flex>
        </Modal>
    )
}

export default WalletModal