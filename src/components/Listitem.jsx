import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Listitem = (props) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton component="a" href={props.link}>
          <ListItemIcon>{props.button}</ListItemIcon>
          {props.switch}
          <ListItemText primary={props.text} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default Listitem;
