import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  outletContainer: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down(700)]: {
      justifyContent: "center",
    },
  },
  cardContainer: {
    marginTop: "8px",
    height: "auto",
    width: "60%",
    [theme.breakpoints.down(1100)]: {
      width: "75%",
      justifyContent: "center",
    },
    [theme.breakpoints.down(700)]: {
      width: "85%",
    },
    [theme.breakpoints.down(560)]: {
      width: "90%",
      justifyContent: "center",
    },
  },
}));
