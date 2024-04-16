import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Container>
        <Contain>
          <AboutUs>
            <AboutName>About Us</AboutName>
            <AboutLine>
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              deleniti nemo quas a ea. Repellendus dolorem, aspernatur,
              consequatur magnam itaque placeat ullam iure mollitia assumenda
              nisi totam. Eaque, in doloremque. */}
              Dignissi to bring significant changes online based learning by
              doing resed cased learning by cosin extensive of arch for game
            </AboutLine>
          </AboutUs>
          <Quicklinks>
            <QuickName>Quick Links</QuickName>
            <Menu>
              <p>
                <CustomLink to="/">Home</CustomLink>
              </p>
              <p>
                <CustomLink to="/about">About Us</CustomLink>
              </p>
              <p>
                <CustomLink to="/pages">Contact</CustomLink>
              </p>
              <p>
                <CustomLink to="/blog">Privacy & policy</CustomLink>
              </p>
              <p>
                <CustomLink to="/contact">Terms & condition</CustomLink>
              </p>
            </Menu>
          </Quicklinks>
          <Services>
            <ServiceName to="/services">Services</ServiceName>
            <ServiceMenu>
              <p>
                <ServiceLink to="/inplay">In-play</ServiceLink>
              </p>
              <p>
                <ServiceLink to="/promotions">Promotions</ServiceLink>
              </p>
              <p>
                <ServiceLink to="/result">Result</ServiceLink>
              </p>
              <p>
                <ServiceLink to="/stadings">Stadings</ServiceLink>
              </p>
            </ServiceMenu>
          </Services>
          <Download>
            <DownloadName>Download</DownloadName>
            <ImageBox>
              <Images>
                <A
                  href="https://play.google.com/store/apps/details?id=com.ihill.mypredict11"
                  target="_blank"
                >
                  <img
                    src="./img/playlogo.png"
                    alt="playlogo"
                    style={{
                      width: "150px",
                      paddingtop: "10px",
                      paddingBottom: "10px",
                    }}
                  ></img>
                </A>
                <A href="https://apps.apple.com/in/app/mypredict11/id6443919564">
                  <img
                    src="./img/appstore.png"
                    alt="appstorelogo"
                    style={{
                      width: "150px",
                      paddingtop: "10px",
                      paddingBottom: "10px",
                    }}
                  ></img>
                </A>
              </Images>
            </ImageBox>
          </Download>
        </Contain>
        <Contact>
          <Phone>
            <i class="fa-solid fa-phone-volume"></i> +789-5565886
          </Phone>
          <Mail>
            <i class="fa-solid fa-envelope"></i> yourmail@gmail.com
          </Mail>
        </Contact>
      </Container>
      <FooterBox>
        <FooterLine>Copyright © 2024. All Rights Reserved !</FooterLine>
      </FooterBox>
    </>
  );
};

export default Footer;

const Container = styled.div`
  padding: 10px;
  background-color: var(--color-primary);
`;

const Contain = styled.div`
  max-width: 85%;
  margin: 0 auto;
  margin-top: 30px;
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

const AboutUs = styled.div`
  width: 60%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 460px) {
    display: flex;
    justify-content: center;
  }
`;

const AboutName = styled.h1`
  color: white;
  font-size: 25px;
  margin-top: 10px;
  @media (max-width: 675px) {
    font-size: 20px;
  }
`;

const AboutLine = styled.div`
  color: white;
  font-size: 15px;
  margin-top: 4px;
`;

const Phone = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: white;
`;

const Mail = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: white;
`;

const Quicklinks = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 20px;
  @media (max-width: 460px) {
    margin-top: 20px;
  }
`;

const QuickName = styled.h1`
  color: white;
  font-size: 25px;
  margin-top: 10px;
  @media (max-width: 675px) {
    font-size: 20px;
  }
`;

const A = styled.a`
  text-decoration: none;
`;

const Menu = styled.div`
  margin-bottom: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CustomLink = styled(Link)`
  color: white;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: #f4c566;
  }
`;

const Services = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ServiceName = styled.h1`
  color: white;
  font-size: 25px;
  margin-top: 10px;
  @media (max-width: 675px) {
    font-size: 20px;
  }
`;

const ServiceMenu = styled.div`
  margin-bottom: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ServiceLink = styled(Link)`
  color: white;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: #f4c566;
  }
`;

const Download = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

const DownloadName = styled.h1`
  color: white;
  font-size: 25px;
  margin-top: 10px;
  @media (max-width: 675px) {
    font-size: 20px;
  }
`;

const ImageBox = styled.div`
  margin-top: 20px;
  display: flex;
  // flex-direction: column;
  // align-items: center;
`;

const Images = styled.div`
  margin-top: 10px;
  display: flex;
  // align-items: center;
  flex-direction: column;
  // gap: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Contact = styled.div`
  max-width: 85%;
  margin: 0 auto;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 830px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

const FooterBox = styled.div`
  align-items: center;
  background-color: black;
`;

const FooterLine = styled.div`
  text-align: center;
  color: white;
  padding: 18px;
  font-size: 18px;
  font-weight: 600;
`;
