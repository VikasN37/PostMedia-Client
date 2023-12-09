import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  navBar: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    alignItems: "center",
    padding: "0px clamp(5px, 3px + 1vw + 1vh, 20px)",
  },
  logo: {
    fontSize: "clamp(15px, 10px + 1vw + 0.4vh, 27px)",
    fontWeight: 600,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  searchbarContainer: {
    width: "35%",
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.down(700)]: {
      width: "90%",
      height: "50%",
    },
    [theme.breakpoints.down(700)]: {
      width: "50%",
      height: "50%",
    },
    display: "flex",
    alignItems: "center",
  },
  textField: {
    height: "90%",
    padding: "4px",
    "&::placeholder": {
      color: theme.palette.primary.contrastText,
      opacity: "0.8",
      fontSize: "clamp(5px, 3px + 1vw, 20px)",
    },
    ".MuiInput-input": {
      fontSize: "clamp(7px, 5px + 1vw, 20px)",
    },
  },
  icon: {
    color: "black",
  },
  menuItem: {
    fontSize: "clamp(6px, 5px + 1vw, 18px)",
  },
}));
