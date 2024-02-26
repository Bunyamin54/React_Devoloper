import React, { useState } from 'react'
import { menuIcon } from '../../helper/iconData'
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from './Navbar.style'

const Navbar = () => {
const [toggle, setToggle] = useState(false)
  return (

       <Nav justifiy="space-between" wrap="wrap">

    <Logo> Clarus Library</Logo>
    <HamburgerIcon onClick={() => setToggle (!toggle)}> {menuIcon}</HamburgerIcon>
     <Menu showMenu= {toggle}> 
      <MenuLink>home</MenuLink>
      <MenuLink>about</MenuLink>
      <MenuLink>register</MenuLink>
      <MenuLink>login</MenuLink>
   
     </Menu>

       </Nav>
  )
}

export default Navbar