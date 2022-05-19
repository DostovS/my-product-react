import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';
import { Flex, ButtonStyle } from "../GlobalStyle";
export const Nav = styled.nav`
  height: 80px;
  position: sticky;
  top: 0;
`
export const NavLogo = styled(Flex)`
  cursor: pointer;
`
export const NavText = styled.div`
  margin-left: 1rem;
  font-weight: 700;
  font-size: 25px;
  @media only screen and (max-width: 1024px) {
    font-size: 22px;
    margin-left: 15px;
  }
  @media only screen and (max-width: 960px) {
    margin-left: 8px;
    font-size: 19px;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 960px) {
    display: none;
  }
`
export const NavItem = styled.li`
  margin-right: 24px;
    @media only screen and (max-width: 1024px) {
      margin-right: 20px;
    }
`
export const NavLinks = styled(LinkS)`
  margin-left: 1rem;
  font-weight: 500;
  color: #ccc;
  &:hover {
    transition: .2s ease;
    color: #fff;
  }
`
export const NavBtns = styled.div`
  display: flex;
`
export const SignInBtn = styled(ButtonStyle)`
  border: 1px solid #fff;
    &:hover {
      transition: .2s ease;
      border: 1px solid #ccc
    }
`
export const SignUpBtn = styled(ButtonStyle)`
  background-color: #02897A;
`
export const Mode = styled.div`
  cursor: pointer;
`
export const MobileIcon = styled.div`
  display: none;
    @media only screen and (max-width: 960px) {
      display: block;
    }
`
export const Icon = styled.i`
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`