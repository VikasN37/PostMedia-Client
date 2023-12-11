import { makeStyles } from "@material-ui/core/styles";
import error from "../../assets/error.png";

export const useStyles = makeStyles((theme) => ({
  page: {
    height: "100vh",
    padding: "0px",
    backgroundImage: `url(${error})`,
    alignItems: "center",
  },

  mainContainer2: {
    flexDirection: "column",
    justifyContent: "center",
    gap: "2.5vh",
  },
  heading: {
    fontSize: "clamp(20px , 15px + 2vw + 1vh , 45px)",
    fontWeight: "600",
    width: "100%",
    textAlign: "center",
  },
  subHeading: {
    fontSize: "clamp(15px , 10px + 1vw + 1vh , 25px)",
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.down(600)]: {
      width: "90%",
    },
  },
  button: {
    fontSize: "clamp(12px , 10px + 0.5vw + 0.5vh , 18px )",
    color: theme.palette.primary.contrastText,
    padding: "clamp(6px , 4px + 1vw , 10px )",
    height: "100%",

    textTransform: "none",
  },
}));
