import React from 'react'
import logo from '../images/favicon.svg';
import {
  Nav, NavLogo, 
  NavText, NavMenu, NavItem,
  NavBtns,SignInBtn, SignUpBtn,
  Mode,MobileIcon, Icon,
  NavLinks
} from './HeaderElements';
import { Container, Row } from '../GlobalStyle';
export default function Header({toggle}) {
  return (
    <>
      <Nav>
        <Container>
          <Row>
            <NavLogo to='/'>
              <img src={logo} alt='' />
              <NavText>
                Product
              </NavText>
            </NavLogo>
            <MobileIcon onClick={toggle} >
              <i className='bx bx-menu'></i>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='product'>Product</NavLinks>
                <NavLinks to='customers'>Customers</NavLinks>
                <NavLinks to='pricing'>Pricing</NavLinks>
                <NavLinks to='recourses'>Resources</NavLinks>
              </NavItem>               
              <NavBtns>
                <SignInBtn>Sign In</SignInBtn>
                <SignUpBtn>Sign Up</SignUpBtn>
              </NavBtns>
               <Mode>
                <Icon className="bx bx-sun"></Icon>
              </Mode>
            </NavMenu>
          </Row>
        </Container>
      </Nav>
    </>
  )
}