import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = ({backgroundColor,color,buttonText,heroBtn,guideBtn,getStartedBtn}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontSaze:"14px",
    cursor:"pointer",
    padding:"0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    displey:"block",
    border:"2px solid transparent",
    "&:hover":{
      backgroundColor:color,
      color: backgroundColor,
      borderColor: backgroundColor
    },
    [theme.breakpoints.down("md")]:{
      margin: (heroBtn || getStartedBtn) && theme.spacing(0,"auto", 3,"auto"),
      width: (heroBtn || getStartedBtn) && "90%"
    },
    [theme.breakpoints.down("sm")]:{
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%"
    },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
};

export default CustomButton;
