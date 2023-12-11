import { Divider } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import { useStyles } from "./style";

function SideBar() {
  const classes = useStyles();
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classes.profileSection}
    >
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.profilePart}
        gap={1.5}
      >
        <Grid item className={classes.profilePhoto}></Grid>

        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={classes.nameSection}
        >
          <Box className={classes.username}>Vikas</Box>
          <Box className={classes.name}>Vikas Niranjan</Box>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" className={classes.divider} />
      <Grid
        item
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <NavLink to="games" className={classes.buttons}>
          <Box className={classes.btnCount}>
            <Box className={classes.btnCountText}>30</Box>
          </Box>
          <Box className={classes.btnText}>All Posts</Box>
        </NavLink>
        <NavLink to="friends" className={classes.buttons}>
          <Box className={classes.btnCount}>
            <Box className={classes.btnCountText}>10</Box>
          </Box>
          <Box className={classes.btnText}>Liked</Box>
        </NavLink>
        <NavLink to="groups" className={classes.buttons}>
          <Box className={classes.btnCount}>
            <Box className={classes.btnCountText}>
              <SettingsIcon
                sx={{ fontSize: "clamp(14px, 12px + 1vw + 0.3vh, 24px)" }}
              />
            </Box>
          </Box>
          <Box className={classes.btnText}>Settings</Box>
        </NavLink>
      </Grid>
    </Grid>
  );
}

export default SideBar;
