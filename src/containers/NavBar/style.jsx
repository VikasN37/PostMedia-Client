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
  textfield: {
    "& .MuiOutlinedInput-input": {
      fontSize: "clamp(6px, 5px + 1vw, 17px)",
      // height: "40px",
      // padding: "10px",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down(350)]: {
        height: "40px",
      },
    },
  },
  searchbarContainer: {
    width: "35%",
    backgroundColor: theme.palette.primary.contrastText,
    paddingLeft: "5px",
    [theme.breakpoints.down(700)]: {
      width: "80%",
      height: "50%",
    },
    [theme.breakpoints.down(700)]: {
      width: "45%",
      height: "50%",
    },
    display: "flex",
    alignItems: "center",
  },
  icon: {
    color: "black",
  },
}));
