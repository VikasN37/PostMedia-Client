import { Grid, useMediaQuery } from "@mui/material";
import { useStyles } from "./style";
import NavBar from "../../containers/NavBar/NavBar";
import SideBar from "../../containers/SideBar/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Homepage() {
  const classes = useStyles();
  const [searchString, setSearchString] = useState("");

  const down700 = useMediaQuery("(max-width:700px)");
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Grid container className={classes.page}>
      <Grid container item className={classes.navBar}>
        <NavBar
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          searchString={searchString}
          setSearchString={setSearchString}
        />
      </Grid>
      <Grid container item className={classes.appLayout}>
        <Grid
          item
          className={
            openDrawer && down700 ? classes.hiddenSideBar : classes.sideBar
          }
        >
          <SideBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </Grid>
        <Grid
          container
          item
          width={down700 ? "100%" : "65%"}
          className={classes.contentBar}
          alignItems={"center"}
        >
          <Outlet context={[searchString, setSearchString]} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Homepage;
