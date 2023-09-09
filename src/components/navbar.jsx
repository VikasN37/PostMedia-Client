import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});


function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <>

      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {" "}
            PostMedia{" "}
          </Typography>
          <LocalPostOfficeIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Box sx={{
            padding: "0px 10px",
            width: "40%",
            borderRadius: 8,
            backgroundColor: 'background.default'
          }}>
            <InputBase placeholder="Search..." color='error'></InputBase>
          </Box>

          <Box sx={{ display: "flex", gap: "20px" }}>
            <Badge badgeContent={4} color="error">
              <MailIcon color="white" />
            </Badge>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon color="white" />
            </Badge>

            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
              sx={{
                height: "30px", width: "30px", "&:hover": {
                  cursor: 'pointer'

                }
              }}
              onClick={() => {
                setOpen(true);
              }}
            />


          </Box>

          {/* menu */}

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClose={handleClose}>Profile</MenuItem>
            <MenuItem onClose={handleClose}>My account</MenuItem>
            <MenuItem onClose={handleClose}>Logout</MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
