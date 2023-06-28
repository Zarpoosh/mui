import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  SpeedDial,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
// icons
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { DateRange } from "@mui/icons-material";

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

const AddOne = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<AddIcon />}
        onClick={(e) => setOpen(true)}
        open={open}
      ></SpeedDial>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={5}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            create post
          </Typography>

          <UserBox>
            <Avatar
              src="https://as1.ftcdn.net/v2/jpg/01/88/16/50/1000_F_188165041_C4LeZPJhrtGSy1hRRk0w77K4b2zA9nUB.jpg"
              sx={{ width: "30", height: "30" }}
            />
            <Typography fontWeight={500} variant="span">
              Minoo Zarpoosh
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on you'r mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} margin={3}>
            <IconButton>
              <EmojiEmotionsIcon color="primary" />
            </IconButton>
            <IconButton>
              <AddPhotoAlternateIcon color="secondary" />
            </IconButton>
            <IconButton>
              <VideoCameraBackIcon color="success" />
            </IconButton>
            <IconButton>
              <PersonAddAlt1Icon color="error" />
            </IconButton>
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="out lined button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddOne;
