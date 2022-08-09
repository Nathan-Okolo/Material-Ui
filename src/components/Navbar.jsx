import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Avatar,
  Box,
  Menu,
  MenuItem,
  alpha,
  Switch,
} from "@mui/material";
import React from "react";
import Pets from "@mui/icons-material/Pets";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import Listitem from "./Listitem";
import { Brightness4 } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.45),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.5),
  },
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  gap: "10px",
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    // height: "20px"
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const address =
  "https://image.shutterstock.com/image-vector/vector-illustration-cheerful-monkeys-600w-208188286.jpg";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  function handleAvaterClick(e) {
    console.log("clicked");
    return setOpen(true);
  }

  function handleNightmood(params) {
    props.setMode(props.mode === "light" ? "dark" : "light");
  }

  return (
    <AppBar
      position="sticky"
      bgcolor={"background.default"}
      // color={"text.primary"}
    >
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>

        <Pets sx={{ display: { xs: "block", sm: "none" } }} />

        <Search spacing={100} direction="row">
          <SearchIcon sx={{ height: 30 }} />
          <InputBase placeholder="Search..." variant="standard"></InputBase>
        </Search>

        <Icons spacing={10} direction="row">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Travis Howard"
            src={address}
            onClick={handleAvaterClick}
          />
        </Icons>
        <Userbox onClick={handleAvaterClick}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Travis Howard"
            src={address}
          />
          <Typography variant="span">John</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>
          <Brightness4 onClick={handleNightmood} />
        </MenuItem>
      </Menu>
    </AppBar>
  );
};
export default Navbar;
