import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  page: {
    gap: "3vh",
  },

  navbar: {
    height: "10%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    [theme.breakpoints.down(430)]: {
      justifyContent: "center",
      gap: "7px",
    },
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logo: {
    fontSize: "clamp(22px, 15px + 1vw + 0.4vh, 27px)",
    fontWeight: 400,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
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
    width: "20%",
    height: "30px",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    fontSize: "clamp(13px , 10px + 0.5vw + 0.5vh , 20px )",
    border: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      width: "27%",
      height: "26px",
    },
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
    fontSize: "clamp(13px , 10px + 0.5vw + 0.5vh , 20px )",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    border: "none",
    height: "40px",
    cursor: "pointer",
    width: "100%",
    [theme.breakpoints.down(700)]: {
      width: "55%",
    },
    [theme.breakpoints.down(400)]: {
      width: "60%",
      height: "30px",
    },
    // padding: "clamp(6px , 4px + 1vw , 10px )",
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
    color: theme.palette.primary.contrastText,
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
