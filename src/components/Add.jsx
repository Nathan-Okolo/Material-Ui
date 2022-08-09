import React from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  PersonAdd,
  MovieCreation,
  Photo,
  EmojiEmotions,
  Edit,
  DateRange,
} from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export const Add = () => {
  const [open, setOpen] = React.useState(false);
  function handleOpen(params) {
    return setOpen(true);
  }
  function handleClose(params) {
    return setOpen(false);
  }
  return (
    <div>
      <Tooltip
        onClick={handleOpen}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "cal(50%-25px)", md: 30 },
        }}
      >
        <Fab color="seprimarycondary" aria-label="edit">
          <Edit />
        </Fab>
      </Tooltip>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://64.media.tumblr.com/2b9986986e1013d7176b117c8776fc86/tumblr_oi47pn52pO1uy5qt0o1_1280.png"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={500}>
              Create post
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={1.9}
            placeholder="Whats on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mb={3} mt={2}>
            <EmojiEmotions color="primary"  />
            <Photo color="secondary" />
            <MovieCreation color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
};
