import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyConment: "space-between",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyConment: "center",
    },

  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7e",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover":{
      color: "#000"
    }
  }));

  return (
  <Box sx = {{ py: 10}}>
    <CustomContainer>
      <CustomContainer>
        <Box>
          <Typography sx={{
            fontSize: "20px",
            color: "#1c1c1D",
            fontWeight: "700",
            mb: 2
          }}>Products.
          </Typography>

          <FooterLink>Listing.</FooterLink>
          <br />
          <FooterLink>Properties.</FooterLink>
          <br />
          <FooterLink>Agents.</FooterLink>
          <br />
          <FooterLink>Blog.</FooterLink>
          <br />
        </Box>

        <Box>
          <Typography sx={{
            fontSize: "20px",
            color: "#1c1c1D",
            fontWeight: "700",
            mb: 2
          }}>Resources.
          </Typography>

          <FooterLink>Our Homes.</FooterLink>
          <br />
          <FooterLink>Stories.</FooterLink>
          <br />
          <FooterLink>Video.</FooterLink>
          <br />
          <FooterLink>Free Trial.</FooterLink>
          <br />
        </Box>
        
        <Box>
          <Typography sx={{
            fontSize: "20px",
            color: "#1c1c1D",
            fontWeight: "700",
            mb: 2
          }}>Company.
          </Typography>

          <FooterLink>Partnerships.</FooterLink>
          <br />
          <FooterLink>Tems of Use.</FooterLink>
          <br />
          <FooterLink>Privacy.</FooterLink>
          <br />
          <FooterLink>Stemap.</FooterLink>
          <br />
        </Box>

        <Box>
          <Typography sx={{
            fontSize: "20px",
            color: "#1c1c1D",
            fontWeight: "700",
            mb: 2
          }}>Get in Touch.
          </Typography>

          <Typography sx={{
            fontSize: "16px",
            color: "#7a7a7E",
            fontWeight: "500",
            mb: 2
          }}>You'll find your next home, in any style your prefer.
          </Typography>

          <IconBox>
            <img src={fbIcon} alt="fbIcon" style={{cursor: "pointer"}}/>
            <img src={twitterIcon} alt="twitterIcon" style={{cursor: "pointer"}}/>
            <img src={linkedinIcon} alt="linkedinIcon" style={{cursor: "pointer"}}/>
          </IconBox>
        </Box>
      </CustomContainer>
    </CustomContainer>
  </Box>
  );
};

export default Footer;
