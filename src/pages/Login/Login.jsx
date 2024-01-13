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
import { Button } from "@mui/base";
import { useStyles } from "./style";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../apis/authSlice";
import { useLoginMutation } from "../../apis/userApi";

function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginBody, setLoginBody] = useState({});
  const [login, { isError, data, isSuccess, isLoading }] = useLoginMutation();

  function handleChange(e) {
    setLoginBody({ ...loginBody, [e.target.name]: e.target.value });
  }

  // const handleClick = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     login(loginBody);
  //   },
  //   [login, loginBody]
  // );

  const handleClick = (e) => {
    e.preventDefault();

    login(loginBody);
  };

  useEffect(() => {
    if (isSuccess) {
      const globalObject = {
        token: data.data.token,
      };
      dispatch(setToken(globalObject));

      navigate("/home/all");
    }
  });

  const down400 = useMediaQuery("(max-width:400px)");
  const down280 = useMediaQuery("(max-width:280px)");
  return (
    <Grid container className={classes.page}>
      <Grid container item className={classes.content}>
        {isSuccess && (
          <Snackbar open={true}>
            <Alert severity="success" sx={{ width: "100%" }}>
              Login Successful !
            </Alert>
          </Snackbar>
        )}
        <Grid
          item
          container
          width={"40%"}
          // height={"100%"}
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
              Sign In to PostMedia{" "}
            </Typography>

            <Typography
              fontSize={"clamp(15px , 12px + 1vw , 19px)"}
              textAlign={"center"}
              sx={{ display: down280 ? "none" : "block" }}
            >
              A personalized media galley app for all your photos !
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
            <TextField
              variant="outlined"
              placeholder="Enter Email"
              fullWidth
              required
              name="email"
              onChange={handleChange}
              className={classes.textField}
            />

            <TextField
              variant="outlined"
              placeholder="Enter password"
              fullWidth
              name="password"
              onChange={handleChange}
              required
              className={classes.textField}
            ></TextField>
            <Grid item>
              <Typography fontSize={"clamp(10px, 8px + 1vw + 0.5vh, 16px)"}>
                Forgot Password?
                <a href="/signup"> Click to reset</a>
              </Typography>
              {isLoading ? (
                <Box display={"flex"} justifyContent={"center"}>
                  <CircularProgress />
                </Box>
              ) : (
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={handleClick}
                >
                  Login
                </Button>
              )}
              {isError && (
                <Typography
                  fontSize={"clamp(10px, 8px + 1vw + 0.5vh, 16px)"}
                  color={"red"}
                >
                  Incorrect Email or Password. Try again.
                </Typography>
              )}
              <Typography fontSize={"clamp(10px, 8px + 1vw + 0.5vh, 16px)"}>
                Didn&apos;t have the account ?
                <Link to="/signup"> Create Account</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default LoginPage;
