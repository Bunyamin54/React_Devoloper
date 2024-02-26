import React, { useState } from 'react'
import { menuIcon } from '../../helper/iconData'
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from './Navbar.style'
import { useAuthContext } from '../../context/AuthContext'

const Navbar = () => {
const [toggle, setToggle] = useState(false)
const {user, setUser} = useAuthContext()
  return (

       <Nav justifiy="space-between" wrap="wrap">

    <Logo> Clarus Library</Logo>
    <HamburgerIcon onClick={() => setToggle (!toggle)}> {menuIcon}</HamburgerIcon>
     <Menu showMenu= {toggle}> 
      <MenuLink to="/" >home</MenuLink>
      <MenuLink to="/about">about</MenuLink>
      <MenuLink to="/login">login</MenuLink>
      <MenuLink to="/register">register</MenuLink>
      <MenuLink to="/login">logout</MenuLink>
   
      {
        user ?
        <MenuLink to="/login">logout</MenuLink> :
        <>   

      <MenuLink to="/login">login</MenuLink>
      <MenuLink to="/register">register</MenuLink>
        </>
 
      }
     </Menu>

       </Nav>
  )
}

export default Navbar