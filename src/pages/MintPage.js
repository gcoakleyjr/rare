import React from 'react'
import { useLocation } from 'react-router'
import { user } from '../data'

import MintForm from '../components/MintForm'
import WalletModal from '../components/WalletModal'

const metamask = {
    icon: "./img/metamask.svg",
    name: "MetaMask"
}

const coinbase = {
    icon: "./img/coinbase.svg",
    name: "CoinBase"
}

const MintPage = ({ modalIsOpen, openModal, closeModal }) => {
    const location = useLocation()
    const wallet = location.pathname.split("/")[2]

    const walletData = wallet === "metamask" ? metamask : coinbase

    return (
        <>
            <MintForm
                walletData={walletData}
                user={user}
                openModal={openModal}
            />
            <WalletModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </>
    )
}

export default MintPage