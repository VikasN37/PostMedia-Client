import {
  CircularProgress,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Button } from "@mui/base";
import { useStyles } from "./style";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../apis/authSlice";
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "../../apis/userApi";

function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const down400 = useMediaQuery("(max-width:400px)");
  const down280 = useMediaQuery("(max-width:280px)");

  useEffect(() => {
    if (isSuccess) {
      setShow(true);
    }
  });

  useEffect(() => {
    if (resetSuccess) {
      dispatch(setToken(data.data.token));
      navigate("/home/all");
    }
  });
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const [resetBody, setResetBody] = useState({});

  const [forgotPassword, { isLoading, isError, isSuccess }] =
    useForgotPasswordMutation();

  const [
    resetPassword,
    {
      data,
      isSuccess: resetSuccess,
      isLoading: resetLoading,
      isError: resetError,
    },
  ] = useResetPasswordMutation();

  function handleEmail(e) {
    e.preventDefault();
    forgotPassword(email);
  }

  function handleChange(e) {
    setResetBody({ ...resetBody, [e.target.name]: e.target.value });
  }
  function handleReset(e) {
    e.preventDefault();

    resetPassword(resetBody);
  }

  return (
    <Grid container className={classes.page}>
      <Grid container item className={classes.content}>
        <Grid
          item
          container
          width={"40%"}
          className={classes.sidebar}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              height: "30%",
            },
          })}
        >
          <Grid item width={down400 ? "80%" : "50%"} justifyContent={"center"}>
            <Typography
              textAlign={"center"}
              sx={(theme) => ({
                fontSize: "clamp(23px , 20px + 1vw , 35px)",
                [theme.breakpoints.down("sm")]: {
                  fontWeight: "400",
                },

                fontWeight: "600",
                marginBottom: "2vh",
              })}
            >
              Reset Password of PostMedia
            </Typography>

            <Typography
              fontSize={"clamp(15px , 12px + 1vw , 19px)"}
              textAlign={"center"}
              sx={{ display: down280 ? "none" : "block" }}
            >
              Follow the steps to reset the password.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.formSection}
          width={"60%"}
          height={"100%"}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              height: "65%",
            },
          })}
        >
          <Grid
            container
            item
            className={classes.form}
            width={down400 ? "85%" : "70%"}
            height={"100%"}
            flexDirection={"column"}
            gap={"3vh"}
            minHeight={"600px"}
            justifyContent={"center"}
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                justifyContent: "flex-start",
              },
            })}
          >
            {!show && (
              <>
                {isError && (
                  <Typography variant="h6" color={"red"}>
                    Cannot send email at this moment. Try again
                  </Typography>
                )}
                <TextField
                  variant="outlined"
                  placeholder="Enter Email"
                  fullWidth
                  required
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={classes.textField}
                />

                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={handleEmail}
                >
                  {isLoading ? <CircularProgress /> : "Send Token"}
                </Button>
              </>
            )}

            {show && (
              <>
                {resetError && (
                  <Typography variant="h6" color={"red"}>
                    Cannot reset password. Try again !
                  </Typography>
                )}
                <Typography fontSize={"clamp(10px, 8px + 1vw + 0.5vh, 16px)"}>
                  We have sent reset token on your email. Paste it below and
                  create new password.
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter Token"
                  fullWidth
                  name="token"
                  required
                  onChange={handleChange}
                  className={classes.textField}
                ></TextField>

                <TextField
                  variant="outlined"
                  placeholder="Enter new password"
                  fullWidth
                  name="password"
                  onChange={handleChange}
                  required
                  className={classes.textField}
                ></TextField>
                <TextField
                  variant="outlined"
                  placeholder="Confirm Password"
                  fullWidth
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                  className={classes.textField}
                ></TextField>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.button}
                    onClick={handleReset}
                  >
                    {resetLoading ? <CircularProgress /> : "Reset Password"}
                  </Button>

                  <Typography fontSize={"clamp(10px, 8px + 1vw + 0.5vh, 16px)"}>
                    <Link to="/login"> Go back</Link>
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default LoginPage;
