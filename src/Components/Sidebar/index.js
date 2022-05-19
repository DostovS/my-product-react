import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu
} from './SidebarElement';
export default function Sidebar({isOpen, toggle}) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to='about' onClick={toggle}>
                About
              </SidebarLink>
              <SidebarLink to='about'>
                Services
              </SidebarLink>
              <SidebarLink to='about'>
                Home
              </SidebarLink>
              <SidebarLink to='about'>
                Contact
              </SidebarLink>
            </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}
