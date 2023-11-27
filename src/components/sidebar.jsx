import {
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { Favorite, Logout } from "@mui/icons-material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";
function Sidebar({ mode, setMode }) {
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position={"fixed"}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Favorite />
                </ListItemIcon>
                <ListItemText primary="Liked" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => setIsopen(true)}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton href="/login">
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ModeNightIcon />
                </ListItemIcon>
                <Switch
                  onChange={(e) => {
                    setMode(mode === "light" ? "dark" : "light");
                  }}
                ></Switch>
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <DeleteForeverIcon />
                </ListItemIcon>
                <ListItemText primary="Delete Account" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>

      <Modal
        open={isOpen}
        onClose={() => setIsopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >


        <Box
          sx={{
            width: "35%",
            height: "40%",
            display: "flex",
            padding: 3,
            borderRadius: 10,
            bgcolor: "background.default",
            color: "text.primary",
          }}
          display={"flex"}
          flexDirection={"column"}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            color={"gray"}
            textAlign={"center"}
          >
            Edit Profile
          </Typography>

          <TextField
            id="username"
            label="Change Username"
            type="string"
            variant="standard"
            size="medium"

            sx={{ height: "20%", mt: 4 }}
          />

          <TextField
            id="password"
            label="Change Password"
            type="password"
            variant="standard"
            size="medium"
            sx={{ fontSize: "40px", height: "20%", mt: 2 }}
          />
          <ButtonGroup
            sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
          >
            <Button
              variant="contained"
              startIcon={<InsertPhotoIcon />}
              sx={{ width: "50%", p: 1, fontSize: "15px", mt: 2 }}
            >
              Update Profile Photo
            </Button>

            <Button
              variant="contained"
              sx={{ width: "30%", p: 1, fontSize: "15px", mt: 2 }}
            >
              Save changes
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}

export default Sidebar;
