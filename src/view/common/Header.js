import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundColor: "#6d0202" }}>
      <Container>
        <Navbar>
          <LogoBox>
            <Link to="/">
              <Logo src="./img/logot1.png" alt="Logo"></Logo>
            </Link>
          </LogoBox>
          <Menu>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About Us</CustomLink>
            <CustomLink to="/pages">Pages</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <Button>
              Find Tipster <i class="fa-solid fa-user"></i>
            </Button>
          </Menu>
          <MobileMenu>
            <IconButton sx={{ color: "white" }}>
              <MenuIcon fontSize="large" onClick={handleClick} />
            </IconButton>
          </MobileMenu>
        </Navbar>
      </Container>
      <div style={{ position: "relative" }}>
        <MobileMenuItem hidden={!isOpen}>
          <MobileCustomLink to="/">Home</MobileCustomLink>
          <MobileCustomLink to="/about">About Us</MobileCustomLink>
          <MobileCustomLink to="/pages">Pages</MobileCustomLink>
          <MobileCustomLink to="/blog">Blog</MobileCustomLink>
          <MobileCustomLink to="/contact">Contact</MobileCustomLink>
          <MenuButton>
            Find Tipster <i class="fa-solid fa-user"></i>
          </MenuButton>
        </MobileMenuItem>
      </div>
    </div>
  );
};

export default Header;

const Container = styled.div`
  max-width: 1285px;
  margin: 0 auto;
`;

const Navbar = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 320px;
`;

const Menu = styled.ul`
  display: flex;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  align-items: center;
  margin-right: 10px;
  gap: 5px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`;

const CustomLink = styled(Link)`
  color: white;
  margin: 10px;
  display: block;
  text-decoration: none;

  &:hover {
    color: #f4c566;
  }
`;

const Button = styled.button`
  background-color: white;
  color: #6d0202;
  padding: 12px 22px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  cursor: pointer;
  border-radius: 5px;

  transition: all 1s;
  &:hover {
    color: #6d0202;
    border-radius: 50px;
    border: 2px solid black;
    background-color: #f4c566;
    transition: all 1s ease 0s;
  }
`;

const MenuButton = styled.button`
  background-color: white;
  color: #6d0202;
  padding: 12px 22px;
  margin-left: 7px;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  width: 45%;
  cursor: pointer;
  border-radius: 5px;

  transition: all 1s;
  &:hover {
    color: #6d0202;
    border-radius: 50px;
    border: 2px solid black;
    background-color: #f4c566;
    transition: all 1s ease 0s;
  }
`;

const MobileMenuItem = styled.div`
  position: absolute;
  // top: 77px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin:0 auto;
  font-size: 2.2rem;
  font-family: "Poppins", sans-serif;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: height 0.5s ease-in-out;
  height: ${(props) => (props.hidden ? "0" : "35vh")};
  overflow-y: scroll;
  // scrollbar-width: thin; 
  // scrollbar-color: #888 #f1f1f1;

  &&::-webkit-scrollbar{
    display: none;
  }
  && {
    -ms-overflow-style: none; / IE and Edge /
    scrollbar-width: none; / Firefox /
  }

  @media (min-width: 960px) {
    display: none;
  }
`;

const MobileCustomLink = styled(Link)`
  display: block;
  padding: 15px 10px;
  border-left: 3px solid #f2f2f2;
  color: #6d0202;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  &:hover {
    color: #f4c566;
    border-color: #f4c566;
  }
`;
