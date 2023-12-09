import { Grid } from "@mui/material";
import { useStyles } from "./style";
import NavBar from "../../containers/NavBar/NavBar";

function Homepage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.page}>
      <Grid item className={classes.navBar}>
        <NavBar />
      </Grid>
    </Grid>
  );
}

export default Homepage;
