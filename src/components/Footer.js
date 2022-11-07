import React from 'react'

import { FooterText, FooterTextB } from './styled/Text.styled'
import { Wrapper } from './styled/componentstyle/Footer.styled'

const Footer = () => {
  return (
    <Wrapper>
      <FooterText>Powered by <FooterTextB>RareCircles. All Rights Reserved.</FooterTextB></FooterText>
      <FooterText>Use of the service and website is subject to our <FooterTextB>Terms of Use</FooterTextB> <FooterTextB>Privacy Statement.</FooterTextB></FooterText>
    </Wrapper>
  )
}

export default Footer