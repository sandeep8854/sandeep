import styled, { keyframes, css } from "styled-components";
// import LogoImg2 from "../../../public/sandeep-logo.png";
import LogoImg2 from "../../../public/SAN-LOGO-black.png";

import { useState } from "react";
import navlinkData from "./navlinkData";
import programmer from "../../../public/programmer.png";
import { PiLinkSimpleHorizontalBreak } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import { MdPhoneAndroid } from "react-icons/md";

import { LuSunMedium } from "react-icons/lu";
import { RxMoon } from "react-icons/rx";
import HumburImage from "../../../public/download.svg";

// import { Link } from "react-router-dom";

const navItemFad = keyframes`
  from {
    opacity: 0;
    transform: translate(50px);
  }
  to {
    opacity: 1;
    transform: translate(0px);
  }
`;

const navItemAnimation = ({ index }) => css`
  animation: ${navItemFad} 0.5s ease forwards ${index / 7 + 0.5}s;
`;
const Nav = styled.nav`
  height: calc(7rem + 10px);
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 98;
  transition: all 1s ease-in-out;
  background-color: #fff;
  border-bottom: 1px solid #f4f4f4;
  opacity: 0.8;
  @media only screen and (max-width: 500px) {
    height: 7rem;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 68px;
  width: 20%;
  overflow: hidden;
  @media only screen and (max-width: 500px) {
    max-height: 272px;
    max-width: 100%;
    overflow: hidden;
  }
`;
const AnchorTag = styled.a``;
const ImageLogo = styled.img`
  width: 60%;
  height: auto;
  overflow: hidden;
  @media only screen and (max-width: 500px) {
    height: auto;
    width: 100%;
    overflow: hidden;
  }
`;
const MenuIcon = styled.div`
  cursor: pointer;
  /* background-color: #fce3ed; */
  padding: 0.7rem;
  border-radius: 5px;
  transition: all 650ms ease-in-out;
  display: none;
  position: absolute;
  right: 2.4rem;
  z-index: 999;

  @media only screen and (max-width: 768px) {
    display: inline-block;
  }
`;
const LineOne = styled.div`
  height: 3px;
  width: 15px;
  margin: 5px 0;
  background-color: #808080;
  transition: all 650ms ease-in-out;
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg) translate(-5px, 6px) scaleX(2)" : "none"};
`;
const LineTwo = styled.div`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
  background-color: #808080;
  transition: all 650ms ease-in-out;
`;
const LineThree = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${({ menuOpen }) => (menuOpen ? "0" : "15px")};
  background-color: #808080;
  transition: all 650ms ease-in-out;
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg) translate(-5px, -6px) scaleX(2)" : "none"};
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  color: #4d4d4d;
  flex-wrap: wrap;
  gap: 1.5rem;
  @media only screen and (max-width: 768px) {
    width: 35rem;
    height: 100vh;
    font-size: 1.9rem;
    background-color: #f082ac;
    position: fixed;
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? "0" : "-35rem")};
    padding-top: 5rem;
    justify-content: flex-start;
    flex-direction: column;
    /* z-index: 998; */
    transition: all 650ms ease-in-out;
  }
`;
const List = styled.li`
  &:last-child {
    margin-right: 0;
  }
  @media only screen and (max-width: 768px) {
    opacity: 0;
    margin: 0.5rem 0;
    ${({ menuOpen }) => (menuOpen ? navItemAnimation : null)}
  }
`;
const NavLink = styled.a`
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background-color: #4d4d4d;
    transition: all ease-in-out 300ms;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const Profile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 100%;
      max-width: 15rem;
      height: auto;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 2rem;
    }
  }
`;

const SocialICon = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      margin: 0 0.5rem;
      font-size: 2rem;
    }
  }
`;
const DarkLightMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: #d90166;
  font-size: calc(1.5rem - 3px);
  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
const DarkLightContainer = styled.div``;
const TwitterConnectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(1rem - 5px);
  font-size: calc(1.5rem - 3px);
  color: #d90166;
  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
const TwitterTextLink = styled.a`
  color: #d90166;
`;

const DarkAndLightContainer = styled.div``;
const LableBox = styled.label``;

const Input = styled.input``;
const SliderBox = styled.div``;
const Circle = styled.div``;
const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;
const ContainerSupportAndMenu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const SpanText1 = styled.span`
  font-size: 1.3rem;
  font-weight: 100;
  @media only screen and (max-width: 703px) {
    font-size: 1.1rem;
  }
`;
const PhoneAndContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SpanText3 = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SpanText2 = styled.span`
  font-size: 2rem;
  font-weight: 500;
  @media only screen and (max-width: 703px) {
    font-size: 1.5rem;
  }
`;
const ImageICON = styled.img``;
const HumburgerIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  border: 1px solid gray;
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
  padding: 4px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
`;

const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function callingFunction() {
    setMenuOpen(!menuOpen);
  }
  return (
    <Nav>
      <LogoContainer>
        <ImageLogo src={LogoImg2} alt="image not found" />
      </LogoContainer>
      {/* <MenuIcon onClick={callingFunction}>
        <LineOne menuOpen={menuOpen} />
        <LineTwo menuOpen={menuOpen} />
        <LineThree menuOpen={menuOpen} />
      </MenuIcon> */}
      {/* <NavList menuOpen={menuOpen}>
        {navlinkData &&
          navlinkData.map((ele, index) => (
            <List
              key={index}
              index={index}
              menuOpen={menuOpen}
              onClick={() => setMenuOpen(false)}
            >
              {ele.isProfile ? (
                <NavLink href="/home">
                  <Profile>
                    <img src={programmer} alt="image not found" />
                    <span>Sandeep Prajapati</span>
                  </Profile>
                </NavLink>
              ) : null}
              {ele.text ? <NavLink href={ele.href}>{ele.text}</NavLink> : null}
              {ele.hasSocialIcon ? (
                <SocialICon>
                  <NavLink href="https://sandeep-portfolio-i/" target="_blank">
                    <PiLinkSimpleHorizontalBreak />
                  </NavLink>
                  <NavLink
                    href="https://github.com/sandeep8854"
                    target="_blank"
                  >
                    <FaGithub />
                  </NavLink>
                  <NavLink
                    href="https://www.hackerrank.com/profile/sandeepstructure"
                    target="_blank"
                  >
                    <FaHackerrank />
                  </NavLink>
                </SocialICon>
              ) : null}
            </List>
          ))}
      </NavList> */}
      <ContainerIcon>
        <ContainerSupportAndMenu>
          <SpanText1>Call for Collaboration</SpanText1>
          <PhoneAndContainer>
            <SpanText3>
              <MdPhoneAndroid size={"2rem"} />
            </SpanText3>
            <SpanText2>811 291 24 94</SpanText2>
          </PhoneAndContainer>
        </ContainerSupportAndMenu>
        <HumburgerIcon>
          <ImageICON src={HumburImage} alt="image not found" />
        </HumburgerIcon>
      </ContainerIcon>
    </Nav>
  );
};

export default Navbar1;
