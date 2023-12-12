import { Grid, TextField, Typography } from "@mui/material";
import { Button } from "@mui/base";
import { useStyles } from "./style";

function SignupPage() {
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
              placeholder="Enter Email"
              fullWidth
              required
              className={classes.textField}
            />

            <TextField
              variant="outlined"
              placeholder="Enter password"
              fullWidth
              required
              className={classes.textField}
            ></TextField>

            <TextField
              variant="outlined"
              placeholder="Confirm password"
              fullWidth
              required
              className={classes.textField}
            ></TextField>

            <TextField
              variant="outlined"
              placeholder="Enter Name"
              fullWidth
              required
              className={classes.textField}
            ></TextField>

            <TextField
              variant="outlined"
              placeholder="Enter username"
              fullWidth
              required
              className={classes.textField}
            ></TextField>

            <Button variant="contained" className={classes.button}>
              Create Account
            </Button>
            <Typography fontSize={"clamp(11px, 6px + 1vw, 17px)"}>
              Already have an account ?
              <b>
                <a href="/login"> Login</a>
              </b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default SignupPage;
