import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Button } from "@mui/base";
import { useStyles } from "./style";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setToken } from "../../apis/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useSignupMutation } from "../../apis/userApi";

function SignupPage() {
  const classes = useStyles();
  const [signupBody, setSignUpBody] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signup, { isLoading, data, isSuccess, isError }] = useSignupMutation();

  function handleChange(e) {
    setSignUpBody({ ...signupBody, [e.target.name]: e.target.value });
  }

  function handleClick(e) {
    e.preventDefault();

    signup(signupBody);
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data.data.token));
      navigate(`/home/${ROUTES.ALLPOSTS}`);
    }
  });
  return (
    <Grid container className={classes.page}>
      {isSuccess && (
        <Snackbar open={true}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Welcome to PostMedia !
          </Alert>
        </Snackbar>
      )}
      <Grid container item className={classes.content}>
        <Grid
          item
          container
          width={"40%"}
          height={"100%"}
          className={classes.sidebar}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              height: "30%",
            },
          })}
        >
          <Grid item width={"50%"}>
            <Typography
              sx={(theme) => ({
                fontSize: "clamp(14px , 10px + 1vw + 1vh, 28px)",
                [theme.breakpoints.down("sm")]: {
                  fontWeight: "400",
                },

                fontWeight: "600",
                marginBottom: "2vh",
                textAlign: "center",
                [theme.breakpoints.down(280)]: {
                  marginTop: "5px",
                },
              })}
            >
              Create Account in PostMedia{" "}
            </Typography>

            <Typography
              textAlign={"center"}
              sx={(theme) => ({
                fontSize: "clamp(15px , 12px + 1vw , 19px)",
                [theme.breakpoints.down("sm")]: {
                  fontWeight: "400",
                },
                [theme.breakpoints.down(280)]: {
                  display: "none",
                },
              })}
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
            width={"70%"}
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
              placeholder="Enter Name"
              fullWidth
              name="name"
              onChange={handleChange}
              required
              className={classes.textField}
            />

            <TextField
              variant="outlined"
              placeholder="Enter Username"
              fullWidth
              name="username"
              onChange={handleChange}
              required
              className={classes.textField}
            ></TextField>

            <TextField
              variant="outlined"
              placeholder="Enter Email"
              fullWidth
              name="email"
              onChange={handleChange}
              required
              className={classes.textField}
            ></TextField>

            <TextField
              variant="outlined"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
              fullWidth
              required
              className={classes.textField}
            ></TextField>

            <TextField
              variant="outlined"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              fullWidth
              required
              className={classes.textField}
            ></TextField>

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
                Create Account
              </Button>
            )}
            {isError && (
              <>
                <Typography
                  fontSize={"clamp(10px, 8px + 0.6vw + 0.5vh, 16px)"}
                  color={"red"}
                >
                  *Username and Email should be unique
                </Typography>
                <Typography
                  fontSize={"clamp(10px, 8px + 0.6vw + 0.5vh, 16px)"}
                  color={"red"}
                >
                  *Password should have min 8 characters
                </Typography>
              </>
            )}
            <Typography fontSize={"clamp(11px, 6px + 1vw, 17px)"}>
              Already have an account ?
              <b>
                <Link to={`/${ROUTES.LOGIN}`}> Login</Link>
              </b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default SignupPage;
