import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const openNav = () => {
    document.querySelector('.main-navigation').classList.add('active');
  };

  const closeNav = () => {
    document.querySelector('.main-navigation').classList.remove('active');
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className="d-block fixed-lg-top cus-back main-navigation"
      >
        < AiOutlineMenu className="cus-menu d-lg-none" onClick={openNav} />
        <div className="d-flex overlay d-lg-none" onClick={closeNav} />
        <Container className="d-lg-flex sidebar px-5">
          <Navbar.Brand
            href="/"
            className="mr-auto mr-lg-3 ml-3 ml-lg-0 nav-logo-cont"
          >
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGIxlIopL2Rkz2W31izyQcASgFiW-bAHDEw&usqp=CAU"
              width="40px"
              height="40px"
              className="d-inline-block align-top"
            />
            {' '}
            Camo
          </Navbar.Brand>
              <Nav className="mr-auto nav-item">
                <Nav.Link href="#home" className="px-4">Home</Nav.Link>
                <Nav.Link href="#about" className="px-4 mx-2">About Us</Nav.Link>
                <Nav.Link href="#focus" className="px-4 mx-2">Focus Area</Nav.Link>
                <Nav.Link href="#joinus" className="px-4 mx-2">Join Us</Nav.Link>
                <Nav.Link href="#blog" className="px-4 mx-2">Blog</Nav.Link>
              </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;