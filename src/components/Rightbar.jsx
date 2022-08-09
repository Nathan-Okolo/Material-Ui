import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const Rightbar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={50}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="http://images2.fanpop.com/image/answers/120000/120077_1274658543457_371_432.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://64.media.tumblr.com/2b9986986e1013d7176b117c8776fc86/tumblr_oi47pn52pO1uy5qt0o1_1280.png"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://i.pinimg.com/474x/14/c5/c4/14c5c4ef4ea43cd1f371c887184d5478.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://img.wattpad.com/d3392698fbb526ed005ddc9e49365a900a09a8c6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64673455446c6e643265444569673d3d2d313032383837373031322e313636623561343032336439383963303237333736303038333436332e6a7067?s=fit&w=720&h=720"
          />
          <Avatar alt="Trevor Henderson" />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/474x/1f/29/40/1f2940ea350f49b1f580eb9d225df1df--honey.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/474x/1f/29/40/1f2940ea350f49b1f580eb9d225df1df--honey.jpg"
          />
          <Avatar alt="Trevwaor ds" />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/474x/1f/29/40/1f2940ea350f49b1f580eb9d225df1df--honey.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/474x/1f/29/40/1f2940ea350f49b1f580eb9d225df1df--honey.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/474x/1f/29/40/1f2940ea350f49b1f580eb9d225df1df--honey.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/474x/1f/29/40/1f2940ea350f49b1f580eb9d225df1df--honey.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt=""
            />
          </ImageListItem>
          
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
              alt=""
            />
          </ImageListItem>

        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://i.pinimg.com/474x/14/c5/c4/14c5c4ef4ea43cd1f371c887184d5478.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://i.pinimg.com/474x/1f/29/40/1f2940ea350f49b1f580eb9d225df1df--honey.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
