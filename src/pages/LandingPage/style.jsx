import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  page: {
    // minHeight: "100vh",
    // height: "auto",
    gap: "3vh",
    width: "100vh",
  },
  navbar: {
    height: "10%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logo: {
    alignItems: "center",
    [theme.breakpoints.down(430)]: {
      width: "100%",
      textAlign: "center",
      marginBottom: "10px",
    },
  },
  buttonSection: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",

    [theme.breakpoints.down(850)]: {
      width: "60%",
    },
    [theme.breakpoints.down(430)]: {
      width: "100%",
    },
  },
  navButtons: {
    padding: "5px",
    width: "25%",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    fontSize: "clamp(13px , 10px + 0.5vw + 0.5vh , 20px )",
    border: "none",
  },

  heroSection: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(700)]: {
      height: "55%",
    },
  },

  heroSectionContent: {
    height: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up(1100)]: {
      width: "70%",
    },
    [theme.breakpoints.down(430)]: {
      width: "100%",
    },
  },

  button: {
    fontSize: "clamp(12px , 10px + 1vw + 0.5vh , 20px )",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    padding: "clamp(6px , 4px + 1vw , 10px )",
    textTransform: "none",
  },

  cardContainer: {
    width: "30%",
    height: "80%",
    // border: "1px solid red",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "50%",
    },
  },
  cardMedia: {
    height: "50%",
    marginBottom: "min(0.5vh,0,5vw)",
  },
}));
