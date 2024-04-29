// import React from "react";
// import styled from "styled-components";

// const Detail = () => {
//   return (
//     <Container>
//       <DetailBox>
//         <Line1>Become a client</Line1>
//         <Line2>Do you have any questions? </Line2>
//         <Line2>Talk to our analysts</Line2>
//         <Details>
//             <Name></Name>
//         </Details>
//       </DetailBox>
//     </Container>
//   );
// };

// export default Detail;

// const Container = styled.div`
//   margin-top: 50px;
// `;

// const DetailBox = styled.div`
//   max-width: 85%;
//   margin: 0 auto;
//   padding: 30px 0 30px 0;
// `;

// const Line1 = styled.div`
//   font-size: 15px;
//   font-weight: 700;
//   color: #0c0338;
//   padding-bottom: 15px;
// `;

// const Line2 = styled.div`
//   font-size: 30px;
//   line-height: 1.5;
// `;

// const Details = styled.div`

// `;

import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Box,
  FormControl,
  FormHelperText,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
// import userEvent from "@testing-library/user-event";

const defaultValues = {
  userName: "",
  userEmail: "",
  userPhone: "",
  userSubject: "",
  userMessage: "",
};

const schema = yup.object().shape({
  userName: yup.string().required("Name is required"),
  userEmail: yup.string().email().required("Email is required"),
  userPhone: yup.string().required("Phone is required"),
  userSubject: yup.string().required("Subject is required"),
  userMessage: yup.string().required("Message is required"),
});

const CustomTextField = styled(TextField)`
  & .MuiInputBase-input {
    color: white;
    font-size: 15px;
  }
  & .MuiFormLabel-root {
    color: black;
    font-size: 15px;
  }
  & .MuiFormLabel-root.Mui-focused {
    color: white; 
    font-size: 15px;
  }
  & .MuiFormHelperText-root {
    color: white  ; 
    font-size: 15px;
    border-radius: 50px;
  }
  & .MuiInputLabel-root {
    color: white; 
    font-size: 15px;
  }
  & .MuiOutlinedInput-root {
    & .MuiOutlinedInput-notchedOutline {
      border-color: #219ebc; 
      border-width: 1px;
      font-size: 15px;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: white; / Change border color when focused /
    }
    & .MuiInputLabel-root {
      color: white; / Change label color here /
      font-size: 15px;
    }
  }
`;

const Detail = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const form = useRef(null);

  const onSubmit = ({ data }) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setOpenSnackbar({
            open: true,
            message: "Form submitted successfully!",
            severity: "success",
          });
          reset();
        },
        (error) => {
          setOpenSnackbar({
            open: true,
            message: "An error occurred. Please try again later.",
            severity: "error",
          });
        }
      );
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar({ ...openSnackbar, open: false });
  };

  return (
    <>
      <Container>
        <Content>
          <FormBox>
            <Title>Do you have any questions?</Title>
            <SubTitle>Talk to our analysts</SubTitle>
            <form ref={form}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControl fullWidth>
                  <Controller
                    name="userName"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <CustomTextField
                        type="text"
                        label="Name"
                        name="userName"
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.userName)}
                      />
                    )}
                  />
                  {errors.userName && (
                    <FormHelperText
                      sx={{ color: "error.main", fontSize: "13px" }}
                    >
                      {errors.userName.message}
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl fullWidth>
                  <Controller
                    name="userEmail"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <CustomTextField
                        type="email"
                        name="userEmail"
                        label="Email"
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.userEmail)}
                      />
                    )}
                  />
                  {errors.userEmail && (
                    <FormHelperText
                      sx={{ color: "error.main", fontSize: "13px" }}
                    >
                      {errors.userEmail.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", gap: 2, padding: "13px 0" }}>
                <FormControl fullWidth>
                  <Controller
                    name="userPhone"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <CustomTextField
                        type="tel"
                        name="userPhone"
                        label="Phone"
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.userPhone)}
                      />
                    )}
                  />
                  {errors.userPhone && (
                    <FormHelperText
                      sx={{ color: "error.main", fontSize: "13px" }}
                    >
                      {errors.userPhone.message}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl fullWidth>
                  <Controller
                    name="userSubject"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <CustomTextField
                        type="text"
                        name="userSubject"
                        label="Subject"
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.userSubject)}
                      />
                    )}
                  />
                  {errors.userSubject && (
                    <FormHelperText
                      sx={{ color: "error.main", fontSize: "13px" }}
                    >
                      {errors.userSubject.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <FormControl fullWidth>
                <Controller
                  name="userMessage"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      type="text"
                      rows={4}
                      multiline
                      name="userMessage"
                      label="Message"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.userMessage)}
                    />
                  )}
                />
                {errors.userMessage && (
                  <FormHelperText
                    sx={{ color: "error.main", fontSize: "13px" }}
                  >
                    {errors.userMessage.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Btn>
                <Button onClick={handleSubmit(onSubmit)}>Send message</Button>
              </Btn>
            </form>
          </FormBox>
        </Content>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar.open}
        autoHideDuration={3000} // Duration for which Snackbar will be displayed (in milliseconds)
        onClose={handleCloseSnackbar}
        sx={{ marginTop: "60px" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={openSnackbar.severity}>
          {openSnackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Detail;

const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;
`;

const Content = styled.div`
  max-width: 50%;
  margin: 20px auto;
  padding: 30px;
  border-radius: 20px;
  background-image: radial-gradient(rgb(26, 106, 104), rgba(0, 31, 100, 0.75)),
    url("./img/bg-01-min.jpg");
  background-position: center; /* Center the background image */
  overflow: hidden; /* Hide any overflowing content */
  position: relative;
  backdrop-filter: blur(10px);
  @media (max-width: 440px) {
    width: 95%;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: white;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
  @media (max-width: 680px) {
    font-size: 35px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.h3`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  @media (max-width: 680px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  background-color: white;
  color: var(--color-primary);
  margin: 15px;
  padding: 12px 22px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: blue;
    border-radius: 50px;
    border: 2px solid white;
    background-color: white;
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 1000px) {
    width: 42%;
    font-size: 13px;
  }
  @media (max-width: 560px) {
    width: 45%;
    font-size: 12px;
  }
  @media (max-width: 470px) {
    width: 50%;
    font-size: 12px;
  }
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
