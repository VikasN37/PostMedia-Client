import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  page: {
    height: "100vh",
  },
  navBar: {
    width: "100%",
    height: "10%",
  },
  appLayout: {
    height: "88%",
    justifyContent: "space-between",
    position: "relative",
  },
  sideBar: {
    width: "30%",
    // height: "85%",
    minHeight: "350px",
    overflow: "auto",
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
  },
  hiddenSideBar: {
    height: "100%",
    zIndex: 2,
    backgroundColor: "white",
    [theme.breakpoints.down(700)]: {
      width: "40%",
    },
    [theme.breakpoints.down(400)]: {
      width: "100%",
    },
  },
  contentBar: {
    width: "65%",
    height: "100%",
    overflow: "auto",
    justifyContent: "flex-start",
    [theme.breakpoints.down(700)]: {
      justifyContent: "center",
      position: "absolute",
    },
  },
  cardContainer: {
    marginTop: "max(1vh,1vw)",
    height: "80%",
    width: "60%",
    border: "1px solid black",
    [theme.breakpoints.down(700)]: {
      width: "95%",
      justifyContent: "center",
      // height: "70%",
      // position: "absolute",
    },
  },
}));
