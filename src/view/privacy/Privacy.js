import React from "react";
import styled from "styled-components";

const Privacy = () => {
  return (
    <Container>
      <Details>
        <Title>Privacy & Policy</Title>
        <SubTitle>
          MyPredict11 is an analytic tool for cricket game that aims to enhance
          the knowledge of favorite cricketer of our users. It provides detailed
          analysis of cricketers that are optimized based on their past
          performances.
        </SubTitle>
        <Notice>Privacy Notice</Notice>
        <NoticeLine>
          This privacy notice discloses the privacy practices for
          www.mypredict11.com. This privacy notice applies solely to information
          collected by this website. Unless you ask us not to, we may contact
          you via email in the future to tell you about specials, new products
          or services, or changes to this privacy policy. We request information
          from you on our subscription form. To subscribe to MyPredict11, you
          must provide contact information (eg. name) and financial information
          (like card number, expiration date). This information is used for
          billing purposes and to activate your subscription. If we have trouble
          processing an order, we'll use this information to contact you.
        </NoticeLine>
        <Notice>Registration</Notice>
        <NoticeLine>
          Registration In order to use this website/application, a user must
          first complete the registration. During registration, a user is
          required to give certain information (such as name and phone number).
          This information is used to contact you about the products/services on
          our application in which you have expressed interest. At your option,
          you may also provide demographic information (such as gender or age)
          about yourself, but it is not required. Your Access to and Control
          Over Information You may opt-out of any future contacts from us at any
          time. You can do the following at any time by contacting us via the
          email address or phone number given on our website: See what data we
          have about you if any. Change/correct any data we have about you. Have
          us delete any data we have about you. Express any concern you have
          about our use of your data. See what data we have about you, if any.
          Change/correct any data we have about you.
        </NoticeLine>
        <Notice>Surveys & Contests </Notice>
        <NoticeLine>
          Surveys & Contests From time to time our site requests information via
          surveys or contests. Participation in these surveys or contests is
          completely voluntary and you may choose whether or not to participate
          and therefore disclose this information. Information requested may
          include contact information (such as name and shipping address), and
          demographic information (such as zip code, age level). Contact
          information will be used to notify the winners and award prizes.
          Survey information will be used for purposes of monitoring or
          improving the use and satisfaction of this site.
        </NoticeLine>
        <Notice>Links:</Notice>
        <NoticeLine>
          Our website contains links to other sites. Please be aware that we are
          not responsible for the content or privacy practices of such other
          sites.
        </NoticeLine>
        <Notice>Security:</Notice>
        <NoticeLine>
          {" "}
          We take precautions to protect your information. When you submit
          sensitive information via the website, your information is protected
          both online and offline.
        </NoticeLine>
        <NoticeLine style={{ padding: "20px 0" }}>
          While we use encryption to protect sensitive information transmitted
          online, we also protect your information offline. Only employees who
          need the information to perform a specific job (for example, billing
          or customer service) are granted access to personally identifiable
          information. The computers/servers in which we store personally
          identifiable information are kept in a secure environment.
        </NoticeLine>
        <NoticeLine>
          If you feel that we are not abiding by this privacy policy, you should
          contact us immediately via mypredict11.2022@gmail.com
        </NoticeLine>
      </Details>
    </Container>
  );
};

export default Privacy;

const Container = styled.div`
  margin: 0 auto;
`;

const Details = styled.div`
  max-width: 84%;
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: 700;
  color: #0c0338;
  border-bottom: 2px solid black;
  padding-bottom: 20px;
  font-family: "Playfair Display", serif;
  @media (max-width: 700px) {
    font-size: 45px;
  }
  @media (max-width: 560px) {
    font-size: 42px;
  }
  @media (max-width: 370px) {
    font-size: 40px;
  }
`;

const SubTitle = styled.div`
  font-size: 17px;
  padding-top: 20px;
  color: black;
  opacity: 0.8;
`;

const Notice = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding: 20px 0;
  color: #120556;
`;

const NoticeLine = styled.div`
  font-size: 17px;
  color: black;
  opacity: 0.8;
`;
