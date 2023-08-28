import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import { navbarElementsColor, primaryColor } from '../../contstants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Line = styled.hr`
  height:1px;
  border-width:0;
  background-color: ${navbarElementsColor};
  width: 50%;
`;

export const LogoContainer = styled.div`
  padding: 20px;
  @media (max-width:770px){
    display: none;
  }
`;

export const Logo = styled.img`
  // padding: 20px;
  max-width: 127.56px;
  height: 45px;
`;


export const NavbarExtendedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 20px!important;
    align-items: center!important;
  }

  @media (min-width: 770px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const DropDownButton = styled(Link)`
color: ${navbarElementsColor};
display: flex;
text-decoration: none;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;

@media (max-width: 770px) {
  margin: 5px;
  font-size: x-large;
}
`;
export const Icon = styled(FontAwesomeIcon)`
  margin-left: 4px;
  height: 1rem;
  width: 1.2rem;
`;

export const NavLink = styled(Link)`
  color: ${navbarElementsColor};
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #000000;
    font-weight: 900;
    @media (min-width: 770px) {
      border-bottom: 2px solid black;
    }
  }

  @media (max-width: 770px) {
    margin: 10px;
    font-size: x-large;
  }
`;



export const Nav = styled.nav`
position:fixed;
    width:100%;
    top:0px;

  background: inherit;
  background-color: #F2F4F7;
  height: 85px;
  display: flex;
  justify-content: space-around;
  padding: 0.2rem ;
  z-index: 12;
`;

export const Bars = styled.i`
  display: none;
  color: ${navbarElementsColor};
  @media screen and (max-width: 770px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    margin: auto 10px !important;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${primaryColor} !important;
  color: white !important;
  width: 90px;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.8;
  }
`;

export const DropDownMenu = styled.div`
> * {
  &.active {
    color: #000000;
    @media (max-width: 770px) {
      border-bottom: 2px solid black;
    }
  }

  @media (min-width: 770px) {
    margin: 5px;
  }
}
position: absolute;
top: 0px;
`