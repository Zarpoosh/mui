import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  styled,
  MenuItem,
  Menu,
  Switch,
} from "@mui/material";
import React, { useState } from "react";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  cursor: "pointer",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  cursor: "pointer",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          minicode
        </Typography>

        {/* menuicon */}
        <IconButton
          onClick={(e) => setOpen(true)}
          sx={{ display: { xs: "block", sm: "none" } }}
          color="white"
        >
          <MenuIcon />
        </IconButton>

        {/* search */}
        <Search>
          <InputBase placeholder="search" />
        </Search>
        {/* badges */}
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://as1.ftcdn.net/v2/jpg/01/88/16/50/1000_F_188165041_C4LeZPJhrtGSy1hRRk0w77K4b2zA9nUB.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        {/* userbox */}
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://as1.ftcdn.net/v2/jpg/01/88/16/50/1000_F_188165041_C4LeZPJhrtGSy1hRRk0w77K4b2zA9nUB.jpg"
          />
          <Typography variant="span">minoo</Typography>
        </UserBox>
      </StyledToolbar>

      {/* menu */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
