import React from 'react'
import { FooterBtn, FooterContainer } from './Footer.style'
import { lightTheme } from '../../styles/theme'
import { lightIcon } from '../../helper/iconData'

const Footer = () => {
  return (
   <FooterContainer>

   <FooterBtn>

    {lightIcon}

   </FooterBtn>

   </FooterContainer>
  )
}

export default Footer