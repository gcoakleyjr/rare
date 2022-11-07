import React from 'react'
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'

import SuccessContent from '../components/SuccessContent'

const SuccessPage = () => {
    //dynamic sizes needed for confetti
    const { width, height } = useWindowSize()
    return (
        <>
            <Confetti
                width={width}
                height={height}
                numberOfPieces={350}
                recycle={false}
            />
            <SuccessContent />
        </>
    )
}

export default SuccessPage