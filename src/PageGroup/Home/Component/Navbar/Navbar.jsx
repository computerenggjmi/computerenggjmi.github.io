import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import Logo from "../../assets/Logo.jpeg";
const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <Link to="/" ><img src={Logo} alt="logo" className="md:cursor-pointer h-9" /></Link>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
         
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  @media (min-width: 1050px) {
    display: none;
  }
`; // max-width: 768px

const SNavbar = styled.nav`
  background-color: white;
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;
const SNavbarBrand = styled.h2`
  font-size: 3rem;
`;
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 1050px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  align-items: center;
`; // max-width: 768px 
const NavRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: black;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;