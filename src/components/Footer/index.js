import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrapper, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrapper, WebsiteRights } from './FooterElemets'
import { AiOutlineCopyright } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from "react-icons/fa"
import { animateScroll as scroll } from 'react-scroll'


export const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink  to="/">How it works</FooterLink>
                            <FooterLink  to="/">Testimonialls</FooterLink>
                            <FooterLink  to="/">Careers</FooterLink>
                            <FooterLink  to="/">Investors</FooterLink>
                            <FooterLink  to="/">Term of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink  to="/">Contact</FooterLink>
                            <FooterLink  to="/">Support</FooterLink>
                            <FooterLink  to="/">Destinations</FooterLink>
                            <FooterLink  to="/">Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink  to="/">Submit Video</FooterLink>
                            <FooterLink  to="/">Ambassadors</FooterLink>
                            <FooterLink  to="/">Agency</FooterLink>
                            <FooterLink  to="/">Influencer</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink  to="/">Instagram</FooterLink>
                            <FooterLink  to="/">Facebook</FooterLink>
                            <FooterLink  to="/">Youtube</FooterLink>
                            <FooterLink  to="/">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to="/" onClick={toggleHome}>
                        Virtual
                    </SocialLogo>
                    <WebsiteRights>
                        Virtual <span><AiOutlineCopyright /> </span>
                        {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink 
                        href="/"
                        target="_blank"
                        // aria-labal="Facebook"
                        >
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink 
                        href="/"
                        target="_blank"
                        // aria-labal="Instagram"
                        >
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink 
                        href="/"
                        target="_blank"
                        // aria-labal="Youtube"
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink 
                        href="/"
                        target="_blank"
                        // aria-labal="Twitter"
                        >
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink 
                        href="/"
                        target="_blank"
                        // aria-labal="Linkedin"
                        >
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterWrapper>
    </FooterContainer>
  )
}
