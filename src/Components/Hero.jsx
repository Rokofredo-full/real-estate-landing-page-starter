import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    displey: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    MarginTop:theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }
  }));

  const Title = styled(Typography)(({ theme }) => ({}));

  return <></>;
};

export default Hero;
