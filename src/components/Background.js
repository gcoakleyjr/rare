import React from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #f7f7f7;
z-index: -1;
`

const Cloud = styled.img`
width: ${props => props.width};
position: absolute;
opacity: .6;
left: ${props => props.left};
top: ${props => props.top};
right: ${props => props.right};
`

const Background = () => {
    return (
        <Backdrop>
            <Cloud
                src="./img/cloud1.svg" alt="cloud backdrop"
                top="50px"
                left="50px"
                width="250px"
            />
            <Cloud
                src="./img/cloud2.svg" alt="cloud backdrop"
                top="70px"
                left="40%"
                width="200px"
            />
            <Cloud
                src="./img/cloud3.svg" alt="cloud backdrop"
                top="45px"
                right="50px"
                width="230px"
            />
        </Backdrop>
    )
}

export default Background