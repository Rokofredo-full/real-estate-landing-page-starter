import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import homeIllustration from "../media/illustration.png";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    
    backgroundColor: "#12275F",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justafyConment: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      widht: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0"
    },
  }));

  return (
    <CustomBox>
    <CustomContainer>
      <Box>
        <Typography sx={{
          fontSize: "35px",
          color: "whete",
          fontWeight: "700",
        }}>Featured Properties.
        </Typography>
        <Typography sx={{
          fontSize: "16px",
          color: "#CCC",
          fontWeight: "500",
          my:3,
        }}>everything you Need to Know about Houses!!!
        </Typography>

        <CustomButton
        backgroundColor= "#fff"
        color= "#17275F"
        buttonText= "Get Started Now"
        getStartedBtn={true}/>
      </Box>

      <img
      srg ={homeIllustration}
      alt="illustration"
      style={{maxWidth: "100%"}}/>
    </CustomContainer>
  </CustomBox>
  );
};

export default GetStarted;
