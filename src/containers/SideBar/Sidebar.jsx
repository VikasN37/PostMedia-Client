import { Divider, useMediaQuery } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import { useStyles } from "./style";
import AddIcon from "@mui/icons-material/Add";

function SideBar({ openDrawer, setOpenDrawer }) {
  const classes = useStyles();
  const profilePhoto = "https://picsum.photos/200/300";
  const down700 = useMediaQuery("(max-width:700px)");

  const handleClick = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent={down700 ? "flex-start" : "center"}
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
        <Grid
          item
          className={classes.profilePhoto}
          sx={{ backgroundImage: `url(${profilePhoto})` }}
        ></Grid>

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
        <NavLink to="all" className={classes.buttons} onClick={handleClick}>
          <Box className={classes.btnCount}>
            <Box className={classes.btnCountText}>30</Box>
          </Box>
          <Box className={classes.btnText}>All Posts</Box>
        </NavLink>
        <NavLink to="liked" className={classes.buttons} onClick={handleClick}>
          <Box className={classes.btnCount}>
            <Box className={classes.btnCountText}>10</Box>
          </Box>
          <Box className={classes.btnText}>Liked</Box>
        </NavLink>
        <NavLink to="add" className={classes.buttons} onClick={handleClick}>
          <Box className={classes.btnCount}>
            <Box className={classes.btnCountText}>
              <AddIcon
                sx={{ fontSize: "clamp(14px, 12px + 1vw + 0.3vh, 24px)" }}
              />
            </Box>
          </Box>
          <Box className={classes.btnText}>Add Post</Box>
        </NavLink>
        <NavLink
          to="settings"
          className={classes.buttons}
          onClick={handleClick}
        >
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
