import React from 'react'

import ConnectContent from '../components/ConnectContent'
import WalletModal from '../components/WalletModal'

const ConnectPage = ({ modalIsOpen, openModal, closeModal }) => {
    return (
        <>
            <ConnectContent openModal={openModal} />
            <WalletModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </>
    )
}

export default ConnectPage