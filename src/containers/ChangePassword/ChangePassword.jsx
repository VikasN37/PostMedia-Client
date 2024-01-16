import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useStyles } from "./style";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Button } from "@material-ui/core";
import { NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useChangePasswordMutation } from "../../apis/userApi";
import { ROUTES } from "../../constants";
import { useDispatch } from "react-redux";
import { setToken } from "../../apis/authSlice";

function ChangePassword() {
  const classes = useStyles();
  const down700 = useMediaQuery("(max-width:700px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordBody, setPasswordBody] = useState({});
  const [changePassword, { data, isLoading, isSuccess, isError }] =
    useChangePasswordMutation();

  function handleChange(e) {
    setPasswordBody({ ...passwordBody, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    changePassword(passwordBody);
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data.data.token));

      navigate(`/home/${ROUTES.ALLPOSTS}`);
    }
  });
  return (
    <Grid container className={classes.outletContainer}>
      {isSuccess && (
        <Snackbar open={true} autoHideDuration={2000}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Password Changed Successfully !
          </Alert>
        </Snackbar>
      )}

      <Grid
        item
        container
        className={classes.heading}
        height={"20%"}
        alignItems={"center"}
        justifyContent={down700 ? "center" : "flex-start"}
      >
        <Typography fontSize={"clamp(22px, 16px + 1vw + 1vh, 30px)"}>
          Change Password
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
        <Grid item className={classes.listItem}>
          Enter Current Password :
          <Box width={"50%"}>
            <TextField
              variant="outlined"
              placeholder="Current Password"
              name="currentPassword"
              onChange={handleChange}
              fullWidth
              className={classes.textfield}
            />
          </Box>
        </Grid>

        <Grid item className={classes.listItem}>
          Enter New Password :
          <Box width={"50%"}>
            <TextField
              variant="outlined"
              placeholder="New Password"
              name="password"
              onChange={handleChange}
              fullWidth
              className={classes.textfield}
            />
          </Box>
        </Grid>

        <Grid item className={classes.listItem}>
          Confirm Password :
          <Box width={"50%"}>
            <TextField
              variant="outlined"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              confirmPassword
              fullWidth
              className={classes.textfield}
            />
          </Box>
        </Grid>

        <Grid item className={classes.buttonContainer}>
          <Box width={"60%"}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                <Typography
                  fontSize={"clamp(13px, 10px + 1vw, 18px)"}
                  textTransform={"none"}
                >
                  Update Password
                </Typography>
              </Button>
            )}
          </Box>
        </Grid>
        <NavLink
          to={`/home/${ROUTES.SETTINGS}`}
          className={clsx(classes.listItem, classes.backButtonContainer)}
        >
          <Box className={classes.backButton}>
            Back
            <Box>
              <KeyboardReturnIcon
                sx={{ fontSize: "clamp(16px, 13px + 1vw, 24px)" }}
              />
            </Box>
          </Box>
        </NavLink>
        {isError && (
          <Typography variant="h6" color={"red"}>
            Something went wrong. Try again with correct information
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default ChangePassword;
