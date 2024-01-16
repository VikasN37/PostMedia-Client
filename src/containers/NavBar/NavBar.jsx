import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  TextField,
  Button,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useStyles } from "./style";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import {
  useDeleteAccountMutation,
  useLogoutMutation,
} from "../../apis/userApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetToken } from "../../apis/authSlice";
import { useNavigate } from "react-router-dom";
import { mainApi } from "../../apis/mainApi";

// eslint-disable-next-line react/prop-types
function NavBar({ openDrawer, setOpenDrawer, setSearchString }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [deleteAccount] = useDeleteAccountMutation();
  const handleDelete = () => {
    let entered = prompt(
      "Type 'DELETE' to confirm. This action is irreversible."
    );
    if (entered === "DELETE") {
      deleteAccount();
      dispatch(resetToken());
      navigate("/");
    }
  };

  const [logout, { isSuccess }] = useLogoutMutation();
  function handleLogout(e) {
    e.preventDefault();
    logout();
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetToken());
      dispatch(mainApi.util.resetApiState())
      navigate("/");
    }
  });

  const [open, setOpen] = useState(false);
  const down700 = useMediaQuery("(max-width:700px)");
  return (
    <Grid
      container
      item
      className={classes.navBar}
      justifyContent={"space-between"}
    >
      <Grid item className={classes.logo}>
        {down700 ? (
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon
              sx={{
                color: "white",
                fontSize: "clamp(18px, 15px + 1vw + 1vh, 28px)",
              }}
            />
          </IconButton>
        ) : (
          <>
            <Box display={"inline"} marginTop={"8px"}>
              <CameraAltIcon />
            </Box>
            <Box display={"inline"}>PostMedia</Box>
          </>
        )}
      </Grid>
      <Grid item className={classes.searchbarContainer}>
        <TextField
          placeholder="Search..."
          variant="standard"
          fullWidth
          onChange={(e) => setSearchString(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon
                    sx={{
                      fontSize: "clamp(15px, 14px + 1vw + 0.5vh, 28px)",
                      paddingLeft: "9px",
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
            disableUnderline: true,
            className: classes.textField,
          }}
        />
      </Grid>
      <Grid item>
        <Button
          onClick={() => setOpen(!open)}
          sx={{
            color: "white",
            fontSize: "18px",
            textTransform: "none",
          }}
        >
          {down700 ? (
            <MoreVertIcon
              sx={{
                padding: "0px",
                fontSize: "clamp(18px, 15px + 1vw + 1vh, 28px)",
              }}
            />
          ) : (
            "Manage Account"
          )}
        </Button>
        <Menu
          id="basic-menu"
          open={open}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={() => setOpen(false)}
        >
          <MenuItem
            onClose={() => setOpen(false)}
            className={classes.menuItem}
            onClick={handleLogout}
          >
            Logout
          </MenuItem>
          <MenuItem
            onClose={() => {
              setOpen(false);
            }}
            onClick={handleDelete}
          >
            Delete Account
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
}
export default NavBar;
