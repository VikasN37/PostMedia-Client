import { Grid, TextField, Typography } from "@mui/material";
import { Button } from "@mui/base";
import { useStyles } from "./style";

function LoginPage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.page}>
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

            <Typography fontSize={"clamp(15px , 12px + 1vw , 19px)"}>
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
          <Grid item className={classes.form}>
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Enter Email"
              fullWidth
              required
            />

            <TextField
              className={classes.textField}
              variant="outlined"
              label="Password"
              fullWidth
              required
            ></TextField>

            <Typography variant="body1">Forgot Password ?</Typography>
            <Button variant="contained" className={classes.button}>
              LOG IN
            </Button>
            <Typography variant="body1">
              Didn&apos;t have account ?
              <b>
                <a href="/signup"> Create Account</a>
              </b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default LoginPage;
