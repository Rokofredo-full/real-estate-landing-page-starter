import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event)=>{
    if(
      event.type ==="keydown" &&
      (event.type === "Tab" || event.type === "Shipt")
    ){
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open});
  };
  const list = (anchor) => (
    <Box sx={{width: anchor === "top" || anchor === "botton" ? "auto":250}}
    role="presentation"    
    onClick={toggleDrawer(anchor, false)}
    onkeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home","Features","Services","Listed","Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemButton>
                  {index === 0 && <HomeIcon/>}
                  {index === 1 && <FeaturedPlayListIcon/>}
                  {index === 2 && <MiscellaneousServicesIcon/>}
                  {index === 3 && <ListAltIcon/>}
                  {index === 4 && <ContactsIcon/>}
                </ListItemButton>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  )

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight:"bold",
    cursor:"pointer",
    "&:hover":{
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]:{
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display:"none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]:{
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display:"flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]:{
      padding: theme.spacing(2),
    },    
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor:"pointer",
    [theme.breakpoints.down("md")]:{
      display: "none",
    },
  }));

  return (
    <NavbarContainer>
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap:"2.5rem",
      }}
    >
      <Box sx={{
        display:"flex",
        alignItems: "center",
      }}>
        <CustomMenuIcon onClick={toggleDrawer("left", true)}/>
        <Drawer
        anchor="left"
        open={mobileMenu["left", false]}
        >
          {list("left")}
        </Drawer>
        <NavbarLogo src={logoImg} alt="logo"/>
      </Box>
      <NavbarLinksBox>
        <NavLink variant="body2">Home</NavLink>
        <NavLink variant="body2">Features</NavLink>
        <NavLink variant="body2">Services</NavLink>
        <NavLink variant="body2">Listed</NavLink>
        <NavLink variant="body2">Contact</NavLink>
      </NavbarLinksBox>
    </Box>
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap:"1rem"
    }}>
      <NavLink variant= "body2">Sing Up</NavLink>
      <CustomButton 
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="Resgister"
        />

    </Box>
    </NavbarContainer>
  );  
};

export default Navbar;
