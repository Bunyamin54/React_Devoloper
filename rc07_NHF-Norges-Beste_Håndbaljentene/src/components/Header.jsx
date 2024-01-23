import React from 'react';
import Container from 'react-bootstrap/Container'; // bu yontem performansli
import {Image} from 'react-bootstrap'; // daha az tavsiy edilen yontem
import logo from '../assets/nhf-logo.png';

const Header = () => {
  return (
    <Container className="text-center mt-5">
      <Image src={logo} width="200px" />
      <h1 className="my-2 white-text">NFH LEGENDS Håndballstjerner</h1>
    </Container>
  );
};

export default Header;
