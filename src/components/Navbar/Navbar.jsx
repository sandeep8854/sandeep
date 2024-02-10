//
import { menuItem } from "./menuItem";
import { LiaHomeSolid } from "react-icons/lia";
import { PiProjectorScreenThin } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";
import { useState } from "react";
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  width: 95%;
  height: 8rem;
  border-radius: 10px;
  @media only screen and (max-width: 850px) {
    z-index: 99;
  }
`;
const H3 = styled.h3`
  font-size: 2.5rem;
  color: #8d8d8d;
  cursor: pointer;
`;
const HambaggerIcon = styled.div`
  font-size: 3rem;
  cursor: pointer;
`;
const UnoderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  list-style: none;
  font-size: 2rem;
  padding: 0;
  font-weight: 500;
  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #fff;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    opacity: 1;
    align-items: stretch;
    padding: 50rem 0 3rem 0;
    margin: 0;
    z-index: -1;
  }
`;
const ListUn = styled.li`
  padding: 1rem;
  &:hover {
    color: #fff;
    background-color: lightblue;
    transition: all 0.2s ease-out;
  }
  @media only screen and (max-width: 850px) {
    display: block;
    width: 100%;
    font-size: 2rem;
    padding: 2rem 0;
  }
`;

const AncharTag = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Navbar = () => {
  const icon = [LiaHomeSolid, PiProjectorScreenThin, IoIosContact];
  const [open, isClosed] = useState(false);
  function handleCicked() {
    return isClosed(!open);
  }

  return (
    <Nav>
      <H3>Sandeep</H3>
      <HambaggerIcon onClick={handleCicked}>
        {open ? <HiOutlineMenuAlt2 /> : <RxCross2 />}
      </HambaggerIcon>
      <UnoderList>
        {menuItem.map((ele, index) => {
          const Icon = icon[index];
          return (
            <>
              <ListUn key={index}>
                <AncharTag href={ele.url}>
                  <Icon />
                  {ele.title}
                </AncharTag>
              </ListUn>
            </>
          );
        })}
      </UnoderList>
    </Nav>
  );
};

export default Navbar;
