import { Box, Switch } from "@mui/material";
import {
  Home,
  Article,
  Storefront,
  Group,
  Person,
  Settings,
  AccountBox,
  ModeNight,
} from "@mui/icons-material";
import React from "react";
import Listitem from "./Listitem";

const Sidebar = (props) => {

  return (
    <Box p={2} flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Listitem link={"#home"} text={"Homepage"} button={<Home />} />
        <Listitem link={"#home"} text={"Pages"} button={<Article />} />
        <Listitem link={"#home"} text={"Friends"} button={<Person />} />
        <Listitem link={"#home"} text={"Groups"} button={<Group />} />
        <Listitem link={"#home"} text={"Marketplace"} button={<Storefront />} />
        <Listitem link={"#home"} text={"Profile"} button={<AccountBox />} />
        <Listitem link={"#home"} text={"Settings"} button={<Settings />} />
      </Box>
    </Box>
  );
};

export default Sidebar;
