import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Box,
  FormControl,
  FormHelperText,
  Grid,
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
      <Div>
        <Container>
          <Details>
            <LeftBox>
              <Content>
                <FormBox>
                  <Title>Do you have any questions?</Title>
                  <SubTitle>Talk to our analysts</SubTitle>
                  <form ref={form}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                          <FormControl fullWidth>
                            <Controller
                              name="userName"
                              control={control}
                              rules={{ required: true }}
                              render={({
                                field: { value, onChange, onBlur },
                              }) => (
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
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                          <FormControl fullWidth>
                            <Controller
                              name="userEmail"
                              control={control}
                              rules={{ required: true }}
                              render={({
                                field: { value, onChange, onBlur },
                              }) => (
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
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                          <FormControl fullWidth>
                            <Controller
                              name="userPhone"
                              control={control}
                              rules={{ required: true }}
                              render={({
                                field: { value, onChange, onBlur },
                              }) => (
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
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                          <FormControl fullWidth>
                            <Controller
                              name="userSubject"
                              control={control}
                              rules={{ required: true }}
                              render={({
                                field: { value, onChange, onBlur },
                              }) => (
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
                        </Grid>
                      </Grid>
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
                    </Box>
                    <Btn>
                      <Button onClick={handleSubmit(onSubmit)}>
                        Send message
                      </Button>
                    </Btn>
                  </form>
                </FormBox>
              </Content>
            </LeftBox>
            <RightBox>
              <Image
                src="./img/contactbox.jpg"
                alt="sideimage"
                style={{ margin: "auto" }}
              />
            </RightBox>
          </Details>
        </Container>
      </Div>
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

const Div = styled.div`
  // background-image: linear-gradient(
  //     rgba(255, 255, 255, 0.1),
  //     rgba(255, 255, 255, 0.1)
  //   ),
  //   url(/img/top-view-football-with-copy-space.jpg);
  // background-size: cover;
  // background-repeat: no-repeat;
  background-color: white;
`;

const Container = styled.div`
  max-width: 78%;
  margin: 0 auto;
`;

const Content = styled.div`
  margin: 20px auto;
  padding: 30px;
  border-radius: 20px 0 0 20px;
  background-image: radial-gradient(rgb(26, 106, 104), rgba(0, 31, 100, 0.75)),
    url("./img/bg-01-min.jpg");
  background-position: center; /* Center the background image */
  overflow: hidden; /* Hide any overflowing content */
  position: relative;
  backdrop-filter: blur(10px);
  @media (max-width: 900px) {
    border-radius: 20px;
  }
  @media (max-width: 440px) {
    width: 80%;
  }
`;

const LeftBox = styled.div`
  max-width: 50%;
  @media (max-width: 900px) {
    max-width: 100%;
  }
  @media (max-width: 440px) {
    max-width: 100%;
  }
`;

const RightBox = styled.div`
  max-width: 50%;
  margin: 20px 0;
  @media (max-width: 900px) {
  }
`;

const Details = styled.div`
  display: flex;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 800px) {
    display: grid;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 20px 20px 0;
  @media (max-width: 900px) {
    display: none;
  }
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
  width: 40%;
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
    width: 45%;
    font-size: 13px;
  }
  @media (max-width: 560px) {
    width: 47%;
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
