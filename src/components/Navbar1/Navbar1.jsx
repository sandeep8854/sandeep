import styled, { keyframes, css } from "styled-components";
import LogoImg2 from "../../../public/sandeep-logo.png";
import { useState } from "react";
import navlinkData from "./navlinkData";
import programmer from "../../../public/programmer.png";
import { PiLinkSimpleHorizontalBreak } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { LuSunMedium } from "react-icons/lu";
import { RxMoon } from "react-icons/rx";

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
  height: calc(6.5rem - 10px);
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 98;
  transition: all 1s ease-in-out;
  background-color: #fff;
  border-bottom: 1px solid #8d8d8d;
  @media only screen and (max-width: 500px) {
    height: 6rem;
  }
`;
const LogoContainer = styled.div``;
const AnchorTag = styled.a``;
const ImageLogo = styled.img`
  width: 5.5rem;
  border-radius: 50%;
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
const BlagContainer = styled.div``;
const ParagramText = styled.p``;
const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function callingFunction() {
    // console.log("clicked");
    setMenuOpen(!menuOpen);
  }
  return (
    <Nav>
      <LogoContainer>
        <AnchorTag href="#Hero">
          <ImageLogo src={LogoImg2} alt="image not found" />
        </AnchorTag>
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
      {/* For temp only. */}
      {/* <div>
          <label class="ui-switch">
            <input type="checkbox" id="toggleSwitch">
            <div class="slider">
              <div class="circle"></div>
            </div>
          </label>          
        </div> */}
      <DarkLightMain>
        <DarkAndLightContainer>
          <LableBox>
            {/* <Input type="checkbox" /> */}
            <SliderBox>
              <Circle></Circle>
            </SliderBox>
          </LableBox>
        </DarkAndLightContainer>
        <BlagContainer>
          <ParagramText>Blog</ParagramText>
        </BlagContainer>
        <TwitterConnectContainer>
          <TfiTwitter />
          <TwitterTextLink href="https://x.com/sandeepdevps" target="_blank">
            Connect
          </TwitterTextLink>
        </TwitterConnectContainer>
      </DarkLightMain>
    </Nav>
  );
};

export default Navbar1;
