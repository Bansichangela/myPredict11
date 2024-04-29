// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const data = [
//   {
//     imageLink: "./img/bettingimage.png",
//     name: "Cricket playing 11",
//     points: 500,
//     link: "",
//   },
//   {
//     imageLink: "./img/bettingimage.png",
//     name: "Santanu Dass",
//     points: 200,
//     link: "",
//   },
//   {
//     imageLink: "./img/bettingimage.png",
//     name: "Debraj Bala",
//     points: 99,
//     link: "",
//   },
//   {
//     imageLink: "./img/bettingimage.png",
//     name: "shivam Jagtap",
//     points: 50,
//     link: "",
//   },
//   {
//     imageLink: "./img/bettingimage.png",
//     name: "DEEPAK MR 360",
//     points: 20,
//     link: "",
//   },
//   {
//     imageLink: "./img/bettingimage.png",
//     name: "PRABHU CHILWADI",
//     points: 10,
//     link: "",
//   },
//   {
//     imageLink: "./img/bettingimage.png",
//     name: "GOLI SHARMA",
//     points: 30,
//     link: "",
//   },
//   {
//     imageLink: "./img/bettingimage.png",
//     name: "POPAT NAYAK",
//     points: 40,
//     link: "",
//   },
// ];

// const Card = () => {
//   return (
//     <>
//       {data.map((item, index) => (
//         <Box key={index}>
//           <div style={{ height: "72px", width: "100%" }}>
//             <img
//               src={item.imageLink}
//               alt="betting"
//               style={{ width: "100%", height: "82px" }}
//             ></img>
//           </div>
//           <Profileimg>
//             <img
//               src="./img/profileimg.jpg"
//               alt="profile"
//               style={{
//                 width: "90px",
//                 borderRadius: "100%",
//               }}
//             ></img>
//           </Profileimg>
//           <div>
//             <Predictor1
//               style={{
//                 marginTop: "70px",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <h2 style={{ color: "ff0268" }}>{item.name}</h2>
//             </Predictor1>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "1fr 1fr",
//                 padding: "20px",
//                 gap: "10px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   flexDirection: "column",
//                   fontSize: "20px",
//                 }}
//               >
//                 <p style={{ marginBottom: "10px" }}>{index + 1}</p>
//                 <p style={{ marginBottom: "10px" }}>Rank</p>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   flexDirection: "column",
//                   fontSize: "20px",
//                 }}
//               >
//                 <p style={{ marginBottom: "10px" }}>{item.points}</p>
//                 <p style={{ marginBottom: "10px" }}>Points</p>
//               </div>
//             </div>
//           </div>
//           <ViewProfile>
//             <CustomLink to="#">View Profile</CustomLink>
//           </ViewProfile>
//         </Box>
//       ))}
//     </>
//   );
// };

// const TopPredictor = () => {
//   return (
//     <Container>
//       <Details>
//         <Title>
//           <div style={{ textAlign: "center" }}>
//             <PredictorName>Top Predictors</PredictorName>
//             <PredictorLine>
//               Place where World's best predictors and data research for upcoming
//               cricket matches
//             </PredictorLine>
//           </div>
//         </Title>
//         <Boxes>
//           <Card />
//         </Boxes>
//       </Details>
//     </Container>
//   );
// };

// export default TopPredictor;

// const CustomLink = styled(Link)`
//   text-decoration: none;
//   color: white;
// `;

// const Container = styled.div`
//   //   max-width: 85%;
// `;

// const Details = styled.div`
//   max-width: 85%;
//   margin: 0 auto;
// `;

// const Title = styled.div`
//   font-size: 15px;
// `;

// const PredictorName = styled.div`
//   color: #0c0338;
//   font-size: 50px;
//   margin: 90px 0 15px 0;
//   font-weight: 700;
//   @media (max-width: 1120px) {
//     font-size: 45px;
//   }
//   @media (max-width: 645px) {
//     font-size: 40px;
//   }
// `;

// const PredictorLine = styled.div`
//   color: #d17f1b;
//   font-size: 25px;
//   font-weight: 600;
//   margin-bottom: 35px;
//   @media (max-width: 1120px) {
//     font-size: 20px;
//   }
//   @media (max-width: 645px) {
//     font-size: 15px;
//   }
// `;

// const Boxes = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   font-size: 15px;
//   gap: 15px;
//   color: white;
//   @media (max-width: 1230px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   @media (max-width: 845px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media (max-width: 600px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;

// const Box = styled.div`
//   border-radius: 15px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #0c0338;
//   position: relative;
//   overflow: hidden;
//   -webkit-transform: scale(1);
//   transform: scale(1);
//   -webkit-transition: 0.3s ease-in-out;
//   transition: 0.3s ease-in-out;
//   &:hover {
//     -webkit-transform: scale(0.97);
//     transform: scale(0.97);
//   }
// `;

// const Profileimg = styled.div`
//   position: relative;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   justify-content: center;
//   height: 20px;
//   line-height: 1;
//   @media (max-width: 1120px) {
//   }
// `;

// const Predictor1 = styled.div`
//   display: flex;
// `;

// const ViewProfile = styled.button`
//   margin-bottom: 20px;
//   padding: 15px 25px;
//   border: 2px solid white;
//   border-radius: 10px;
//   color: #d17f1b;
//   z-index: 1;
//   background: transparent;
//   position: relative;
//   font-weight: 1000;
//   font-size: 17px;
//   box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
//   transition: all 250ms;
//   overflow: hidden;

//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 0;
//     border-radius: 10px;
//     background-color: #d17f1b;
//     z-index: -1;
//     box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
//     transition: all 400ms;
//   }

//   &:hover {
//     color: #0c0338;
//   }

//   &:hover::before {
//     width: 100%;
//   }
// `;

import React from "react";
import styled from "styled-components";
const data = [
  {
    imageLink: "./img/profile1.png",
    name: "Manish Polekar",
    rank: "1",
    points: "693.00",
    Link: "View Profile",
  },
  {
    imageLink: "./img/profile1.png",
    name: "Cricket playing ",
    rank: "2",
    points: "659.50",
    Link: "View Profile",
  },
  {
    imageLink: "./img/profile1.png",
    name: "Santanu Dass ",
    rank: "3",
    points: "500.00",
    Link: "View Profile",
  },
  {
    imageLink: "./img/profile1.png",
    name: "Debraj Bala ",
    rank: "4",
    points: "200.00",
    Link: "View Profile",
  },
  {
    imageLink: "./img/profile1.png",
    name: "shivam Jagtap ",
    rank: "5",
    points: "99.00",
    Link: "View Profile",
  },
  {
    imageLink: "./img/profile1.png",
    name: "Shahzaid Bhatti ",
    rank: "6",
    points: "50.00",
    Link: "View Profile",
  },
];

const Cards = () => {
  return (
    <>
      {data.map((item, index) => (
        <Predictor key={index}>
          <PredictorProfile>
            <img
              src={item.imageLink}
              alt="img"
              style={{
                borderRadius: "100%",
                width: "50px",
                boxShadow:
                  " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            ></img>
          </PredictorProfile>
          <PredictorName>
            <p>{item.name}</p>
          </PredictorName>
          <PredictorRank>{item.rank}</PredictorRank>
          <PredictorPoint>{item.points}</PredictorPoint>
          <Button>{item.Link}</Button>
        </Predictor>
      ))}
    </>
  );
};

const TopPredictor = () => {
  return (
    <Container>
      <Detail>
        <Title>
          <div style={{ textAlign: "center" }}>
            <TitleName>Top Predictors</TitleName>
            <TitleLine>
              Place where World's best predictors and data research for upcoming
              cricket matches
            </TitleLine>
          </div>
        </Title>
        <Boxes>
          <Index>
            <ProfileImg>Profile Image</ProfileImg>
            <ProfileName>Name</ProfileName>
            <ProfileRank>Rank</ProfileRank>
            <ProfilePoints>Points</ProfilePoints>
            <Profile2>Profile</Profile2>
          </Index>
          <Cards />
        </Boxes>
      </Detail>
    </Container>
  );
};

export default TopPredictor;

const Container = styled.div`
  margin-top: 50px;
`;

const Detail = styled.div`
  max-width: 84%;
  margin: 0 auto;
`;

const Title = styled.div`
  margin: 0 auto;
  font-size: 15px;
  padding-bottom: 15px;
`;

const TitleName = styled.div`
  color: #0c0338;
  font-size: 50px;
  margin: 80px 0 15px 0;
  font-weight: 700;
  @media (max-width: 620px) {
    font-size: 40px;
  }
`;

const TitleLine = styled.div`
  color: #d17f1b;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
  @media (max-width: 620px) {
    font-size: 20px;
  }
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Predictor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  gap: 20px;
  background-color: #e8e8e8;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 5px;
    padding: 10px;
  }
`;

const PredictorProfile = styled.div`
  margin-right: 20px;
  padding: 5px;
  width: 5%;
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

const PredictorName = styled.div`
  width: 20%;
  padding: 5px;
  font-size: 20px;
  font-weight: 700;
  color: #0c0338;
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

const PredictorRank = styled.div`
  padding: 5px;
  width: 5%;
  font-size: 20px;
  color: #0c0338;
  font-weight: 700;
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

const PredictorPoint = styled.div`
  width: 5%;
  font-size: 20px;
  color: #0c0338;
  font-weight: 700;
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 20%;
  background-color: white;
  color: var(--color-primary);
  padding: 12px 22px;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  cursor: pointer;
  border: 2px solid var(--color-primary);
  border-radius: 50px;

  transition: all 1s;
  &:hover {
    color: white;
    border-radius: 50px;
    border: 2px solid --color-primary;
    background-color: var(--color-primary);
    transition: all 1s ease 0s;
  }
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

const Index = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  font-size: 20px;
`;

const ProfileName = styled.div`
  // font-size: 20px;
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  // font-size: 20px;
  text-align: center;
`;

const ProfileRank = styled.div`
  // font-size: 20px;
  text-align: center;
`;

const ProfilePoints = styled.div`
  // font-size: 20px;
  text-align: center;
`;

const Profile2 = styled.div`
  // font-size: 20px;
  text-align: center;
`;
