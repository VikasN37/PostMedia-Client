import { Box, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import { useStyles } from "./style";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Button } from "@material-ui/core";
import theme from "../../themes/theme";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

function ChangePassword() {
  const classes = useStyles();
  const down700 = useMediaQuery("(max-width:700px)");
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
              fullWidth
              sx={{
                "& .MuiOutlinedInput-input": {
                  fontSize: "clamp(12px, 10px + 1vw, 17px)",
                  padding: "2px",
                  height: "45px",
                  justifyContent: "center",
                  alignItems: "center",
                  [theme.breakpoints.down(350)]: {
                    height: "30px",
                  },
                },
              }}
            />
          </Box>
        </Grid>

        <Grid item className={classes.listItem}>
          Enter New Password :
          <Box width={"50%"}>
            <TextField
              variant="outlined"
              placeholder="New Password"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-input": {
                  fontSize: "clamp(12px, 10px + 1vw, 17px)",
                  padding: "2px",
                  height: "45px",
                  justifyContent: "center",
                  alignItems: "center",
                  [theme.breakpoints.down(350)]: {
                    height: "30px",
                  },
                },
              }}
            />
          </Box>
        </Grid>

        <Grid item className={classes.listItem}>
          Confirm Password :
          <Box width={"50%"}>
            <TextField
              variant="outlined"
              placeholder="Confirm Password"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-input": {
                  fontSize: "clamp(12px, 10px + 1vw, 17px)",
                  padding: "2px",
                  height: "45px",
                  justifyContent: "center",
                  alignItems: "center",
                  [theme.breakpoints.down(350)]: {
                    height: "30px",
                  },
                },
              }}
            />
          </Box>
        </Grid>

        <Grid item className={classes.buttonContainer}>
          <Button fullWidth variant="contained" color="primary">
            <Typography
              fontSize={"clamp(13px, 10px + 1vw, 18px)"}
              textTransform={"none"}
            >
              Update Password
            </Typography>
          </Button>
        </Grid>
        <NavLink
          to={"/home/settings"}
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
      </Grid>
    </Grid>
  );
}

export default ChangePassword;
