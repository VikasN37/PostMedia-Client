import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useStyles } from "./style";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../apis/userApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetToken } from "../../apis/authSlice";

function Settings() {
  const classes = useStyles();
  const down700 = useMediaQuery("(max-width:700px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    let entered = prompt(
      "Type 'DELETE' to confirm. This action is irreversible."
    );
  };

  const [logout, { isSuccess }] = useLogoutMutation();

  function handleLogout(e) {
    e.preventDefault();
    logout();
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetToken());
      navigate("/");
    }
  });

  return (
    <Grid container className={classes.outletContainer}>
      <Grid
        item
        container
        className={classes.heading}
        height={"20%"}
        alignItems={"center"}
        justifyContent={down700 ? "center" : "flex-start"}
      >
        <Typography fontSize={"clamp(22px, 16px + 1vw + 1vh, 30px)"}>
          Settings
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.listContainer}
        flexDirection="column "
        justifyContent={"flex-start"}
        alignItems={down700 ? "center" : "flex-start"}
      >
        <NavLink to={"edit"} className={classes.listItem}>
          <Box>Edit Profile</Box>
          <Box>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "clamp(16px, 13px + 1vw, 24px)" }}
            />
          </Box>
        </NavLink>

        <NavLink to={"changePassword"} item className={classes.listItem}>
          Change Password
          <Box>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "clamp(16px, 13px + 1vw, 24px)" }}
            />
          </Box>
        </NavLink>
        <Grid item className={classes.listItem} onClick={handleLogout}>
          Logout
          <Box>
            <KeyboardReturnIcon
              sx={{ fontSize: "clamp(16px, 13px + 1vw, 24px)" }}
            />
          </Box>
        </Grid>
        <Grid item className={classes.listItem} onClick={handleDelete}>
          Delete Account
          <Box>
            <DeleteIcon sx={{ fontSize: "clamp(16px, 13px + 1vw, 24px)" }} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Settings;
