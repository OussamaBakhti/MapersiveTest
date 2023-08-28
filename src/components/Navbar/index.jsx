import { useState } from "react";

import {
  NavbarExtendedContainer,
  Logo,
  NavLink,
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  Button,
  LogoContainer,
  Line
} from "./NavbarElements.styles";

import { navbarElements } from '../../contstants';

import Dropdown from "./DropDown";

import { LogoImg } from "../../assets/index";


const Navbar = () => {
  const [extendnavbar, setExtendNavbar] = useState(false);


  return (
    <>
      <Nav>
        <LogoContainer>
          <Logo src={LogoImg}></Logo>
        </LogoContainer>
        <Bars
          className={extendnavbar ? 'fas fa-times' : 'fas fa-bars'}
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        />
        <NavMenu>
          {navbarElements.map(elem => (
            elem?.elements ? (
              <Dropdown id={elem.title} title={elem.title} elements={elem.elements} />
            ) :
              <NavLink to={elem.to} activeStyle> {elem.title} </NavLink>
          ))}
        </NavMenu>

        <NavBtn>
          <Button >Sign In</Button>
        </NavBtn>

      </Nav>
      {extendnavbar && (
        <NavbarExtendedContainer>
          {navbarElements.map(elem => (
            elem?.elements ? (
              <Dropdown id={elem.title} title={elem.title} elements={elem.elements} />
            ) :
              <NavLink to={elem.to} activeStyle> {elem.title} </NavLink>
          ))}
          <Line />
          <Button >Sign In</Button>
        </NavbarExtendedContainer>
      )}
    </>
  );
}

export default Navbar;