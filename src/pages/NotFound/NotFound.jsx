import { Grid } from "@mui/material";
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { NavLink } from "react-router-dom";
import { useStyles } from "./style";
import { useSelector } from "react-redux";

export function NotFoundPage() {
  const classes = useStyles();

  const token = useSelector((state) => state.root.auth.token);

  return (
    <Grid container className={classes.page}>
      <Grid container className={classes.mainContainer2}>
        <Grid item className={classes.heading}>
          404 Error !
        </Grid>

        <Grid item className={classes.subHeading}>
          The requested page could not be found on the server.
        </Grid>
        <Grid item>
          <NavLink to={token ? "/home/all" : "/"}>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              startIcon={<KeyboardBackspaceIcon />}
            >
              Go back to Homepage
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
}
