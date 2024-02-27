import React, { useState } from 'react'
import { menuIcon } from '../../helper/iconData'
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from './Navbar.style'
import { useAuthContext } from '../../context/AuthContext'

const Navbar = () => {
const [toggle, setToggle] = useState(false)
const {user, setUser} = useAuthContext()
const logOut = () => {
 setUser(false);
  handleClose();
}
const handleClose = () => {
  setToggle(false)
}
  return (

       <Nav justify="space-between" wrap="wrap">

    <Logo to = "/" > Bokhandlerprisen</Logo>
    <HamburgerIcon onClick={() => setToggle (!toggle)}> {menuIcon}</HamburgerIcon>
     <Menu showMenu= {toggle}> 
      <MenuLink to="/" onClick={handleClose} >home</MenuLink>
      <MenuLink to="/about" onClick={handleClose}>about</MenuLink>
   
      {
        user ? (
          <MenuLink to="/login" onClick={logOut}>logout</MenuLink>

        ) : (
       
          <>   

          <MenuLink to="/login" onClick={handleClose}>login</MenuLink>
          <MenuLink to="/register" onClick={handleClose}>register</MenuLink>
            </>


        )
   
       
 
      }
     </Menu>

       </Nav>
  )
}

export default Navbar