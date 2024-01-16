/* eslint-disable react/prop-types */
import { Divider, useMediaQuery } from "@material-ui/core";
import { Avatar, Box, CircularProgress, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import { useStyles } from "./style";
import AddIcon from "@mui/icons-material/Add";
import { useGetUserQuery } from "../../apis/userApi";
import { ROUTES } from "../../constants";

function SideBar({ openDrawer, setOpenDrawer }) {
  const classes = useStyles();
  const down700 = useMediaQuery("(max-width:700px)");

  const handleClick = () => {
    setOpenDrawer(!openDrawer);
  };

  const { data, isFetching, isError } = useGetUserQuery();
  if (isError) {
    return;
  }
  if (isFetching || !data) {
    return <CircularProgress />;
  }
  const { user } = data.data;

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
        <Avatar
          src={`https://postmedia-backend.onrender.com/profilePhotos/${user.profilePhoto}`}
          sx={{
            width: "clamp(50px, 40px + 5vw + 10vh, 250px)",
            height: "clamp(50px, 40px + 5vw + 10vh, 250px)",
          }}
          className={classes.profilePhoto}
        />

        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={classes.nameSection}
        >
          <Box className={classes.username}>{user.username}</Box>
          <Box className={classes.name}>{user.name}</Box>
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
        <NavLink
          to={ROUTES.ALLPOSTS}
          className={classes.buttons}
          onClick={handleClick}
        >
          <Box className={classes.btnCount}>
            <Box className={classes.btnCountText}>{user.totalPosts}</Box>
          </Box>
          <Box className={classes.btnText}>All Posts</Box>
        </NavLink>
        <NavLink
          to={ROUTES.LIKEDPOSTS}
          className={classes.buttons}
          onClick={handleClick}
        >
          <Box className={classes.btnCount}>
            <Box className={classes.btnCountText}>{user.likedPosts}</Box>
          </Box>
          <Box className={classes.btnText}>Liked</Box>
        </NavLink>
        <NavLink
          to={ROUTES.ADDPOST}
          className={classes.buttons}
          onClick={handleClick}
        >
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
          to={ROUTES.SETTINGS}
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
