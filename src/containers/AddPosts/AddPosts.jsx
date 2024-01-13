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
import { useAddPostMutation } from "../../apis/postsApi";

function AddPosts() {
  const classes = useStyles();
  const down700 = useMediaQuery("(max-width:700px)");

  const [location, setLocation] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState();
  const [addPost, { data, isLoading, isSuccess }] = useAddPostMutation();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    if (location !== "") {
      formData.append("location", location);
    }
    if (caption !== "") {
      formData.append("caption", caption);
    }
    formData.append("image", file);

    addPost(formData);
  }

  return (
    <Grid container className={classes.outletContainer}>
      {isSuccess && (
        <Snackbar open={true}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Post Added !
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
          Add Post
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
        <Grid item to={"edit"} className={classes.listItem}>
          <Box>Select Photo :</Box>
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
              {/* <Typography
                fontSize={"clamp(13px, 10px + 1vw, 18px)"}
                textTransform={"none"}
              > */}
              Select Photo
              <input
                type="file"
                name="image"
                style={{ width: "100%" }}
                onChange={(e) => setFile(e.target.files[0])}
                hidden
              />
              {/* </Typography> */}
            </Button>
          </Box>
        </Grid>

        <Grid item className={classes.listItem}>
          Enter Location :
          <Box width={"50%"}>
            <TextField
              variant="outlined"
              placeholder="Enter Location"
              name="location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              fullWidth
              rows={2}
              className={classes.textfield}
            />
          </Box>
        </Grid>
        <Grid item className={classes.listItem}>
          Enter caption :
          <Box width={"50%"}>
            <TextField
              variant="outlined"
              placeholder="Enter Caption"
              name="caption"
              onChange={(e) => setCaption(e.target.value)}
              fullWidth
              className={classes.textfield}
            />
          </Box>
        </Grid>
        <Grid item className={classes.buttonContainer}>
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
              Upload
            </Typography>
          </Button>
        </Grid>
        <NavLink
          to={"/home/all"}
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

export default AddPosts;
