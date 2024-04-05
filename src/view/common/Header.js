import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
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
            <Li href="">Home</Li>
            <Li href="">About Us</Li>
            <Li href="">Pages</Li>
            <Li href="">Blog</Li>
            <Li href="">Contact</Li>
            <Button>
              Find Tipster <i class="fa-solid fa-user"></i>
            </Button>
          </Menu>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

const Navbar = styled.div`
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
  align-items: center;
  justify-content: space-around;
`;

const Li = styled.li`
  color: white;
  margin: 10px;
  display: block;
  text-decoration: none;
`;

const Button = styled.button`
  background-color: white;
  color: #6d0202;
  padding: 12px 22px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  border-radius: 5px;

  transition: all 1s;
  &:hover {
    color: #6d0202;
    border-radius: 50px;
    border: 2px solid black;
    background-color: lightgray;
    transition: all 1s ease 0s;
  }
`;
