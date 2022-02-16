import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'
import { IconContext } from 'react-icons/lib'


export const Sidebar = ({ isOpen, toggle }) => {
  return (
      <>
      <IconContext.Provider value={{ color: "#fff"}}>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>
                    Discover
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="signin">
                    Sign In
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    </IconContext.Provider>
      </>
  )
}
