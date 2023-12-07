import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  page: {
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
    cursor: "pointer",
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
    width: "25%",
    justifyContent: "center",
    height: "100%",
    overflow: "auto",
    // border: `2px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down(850)]: {
      width: "90%",
      height: "50%",
    },
  },
  cardMedia: {
    height: "40%",
    marginBottom: "min(0.5vh,0,5vw)",
    [theme.breakpoints.down(850)]: {
      width: "100%",
    },
  },

  footer: {
    padding: "clamp(20px, 15px + 1vw, 30px)",
    color: "white",
    overflow: "auto",
  },
  footerHeading: {
    fontSize: "clamp(16px, 10px + 1vw + 1vh, 28px)",
    fontWeight: "600",
    width: "80%",
  },
  footerContent: {
    width: "85%",
    fontSize: "24px",
    lineHeight: "40px",
    padding: "8px",
  },
  iconsContainer: {
    marginTop: "12px",
  },
  icons: {
    width: "clamp(14px, 30px + 1vw, 45px)",
    height: "clamp(14px, 30px + 1vw, 45px)",
  },
}));
