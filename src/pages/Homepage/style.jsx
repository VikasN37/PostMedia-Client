import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  page: {
    height: "100vh",
  },
  navBar: {
    width: "100%",
  },
  appLayout: {
    height: "88%",
    justifyContent: "space-between",
    position: "relative",
  },
  sideBar: {
    width: "30%",
    minHeight: "350px",
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
  },
  hiddenSideBar: {
    height: "100%",
    zIndex: 2,
    backgroundColor: "white",
    [theme.breakpoints.down(700)]: {
      width: "50%",
    },
    [theme.breakpoints.down(400)]: {
      width: "100%",
    },
  },
  contentBar: {
    width: "65%",
    height: "100%",
    overflow: "auto",
    gap: "14px",
    justifyContent: "flex-start",
    [theme.breakpoints.down(700)]: {
      justifyContent: "center",
      position: "absolute",
    },
  },
}));
