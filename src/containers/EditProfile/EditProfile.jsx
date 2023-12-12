import { Box, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import { useStyles } from "./style";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

function EditProfile() {
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
          Edit Profile
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
          <Box>New Profile Photo</Box>
          <Box className={classes.uploadButton}>
            <Button
              fullWidth
              variant="contained"
              startIcon={
                <CloudUploadIcon
                  sx={{ fontSize: "clamp(16px, 13px + 1vw, 24px)" }}
                />
              }
              color="primary"
            >
              <Typography
                fontSize={"clamp(13px, 10px + 1vw, 18px)"}
                textTransform={"none"}
              >
                Upload
              </Typography>
            </Button>
          </Box>
        </Grid>

        <Grid itemID="" className={classes.listItem}>
          Change Username:
          <Box width={"50%"}>
            <TextField
              variant="outlined"
              placeholder="Enter Username"
              fullWidth
              className={classes.textfield}
            />
          </Box>
        </Grid>

        <Grid item className={classes.buttonContainer}>
          <Button fullWidth variant="contained" color="primary">
            <Typography
              fontSize={"clamp(13px, 10px + 1vw, 18px)"}
              textTransform={"none"}
            >
              Save Changes
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

export default EditProfile;
