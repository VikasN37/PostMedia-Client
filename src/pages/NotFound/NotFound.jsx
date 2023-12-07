import { Grid } from "@mui/material";
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { NavLink } from "react-router-dom";
import { useStyles } from "./style";

export function NotFoundPage() {
  const classes = useStyles();

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
          <NavLink to="/">
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
