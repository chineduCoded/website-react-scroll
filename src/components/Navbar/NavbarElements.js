import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom"
import { Link as LinkScroll } from "react-scroll"

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? "#000" : "transparent")};
height: 80px;
margin-top: -80px;
position: sticky;
top: 0;
font-size: 1rem;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavContainer = styled.div`
width: 100%;
max-width: 1100px;
height: 80px;
padding: 0 24px;
display: flex;
justify-content: space-between;
z-index: 1;

`

export const NavLogo = styled(LinkRouter)`
display: flex;
justify-self: flex-start;
align-items: center;
margin-left: 24px;
color: #fff;
cursor: pointer;
font-size: 1.5rem;
font-weight: bold;
text-decoration: none;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
color: #fff;
height: 100%;
display: flex;
align-items: center;
padding: 0 1rem;
text-decoration: none;
cursor: pointer;

&.active {
    border-bottom: 3px solid #01bf71;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkRouter)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: al 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: al 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`