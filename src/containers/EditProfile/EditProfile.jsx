import {
  Alert,
  Box,
  Grid,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useStyles } from "./style";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";
import { useUpdateUserMutation } from "../../apis/userApi";

function EditProfile() {
  const classes = useStyles();
  const down700 = useMediaQuery("(max-width:700px)");
  const [body, setBody] = useState({});

  const [updateUser, { isSuccess, isError, isLoading }] =
    useUpdateUserMutation();
  function handleChange(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(body);
    updateUser(body);
  }

  return (
    <Grid container className={classes.outletContainer}>
      {isSuccess && (
        <Snackbar open={true}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Information Updated Successfully
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
        <Typography fontSize={"clamp(17px, 14px + 1vw + 1vh, 25px)"}>
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
              input
              fullWidth
              variant="contained"
              component="label"
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
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  hidden
                />
              </Typography>
            </Button>
          </Box>
        </Grid>

        <Grid itemID="" className={classes.listItem}>
          Change Name:
          <Box width={"50%"}>
            <TextField
              variant="outlined"
              placeholder="Enter Name"
              name="name"
              onChange={handleChange}
              fullWidth
              className={classes.textfield}
            />
          </Box>
        </Grid>

        <Grid item className={classes.buttonContainer}>
          <Box width={"40%"}>
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
                Save Changes
              </Typography>
            </Button>
          </Box>
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
