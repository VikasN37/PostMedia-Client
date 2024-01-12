import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  outletContainer: {
    width: "100%",
    height: "100%",
  },

  listContainer: {
    width: "100%",
    height: "80%",
    gap: "1vh",
    [theme.breakpoints.down(300)]: {
      height: "75%",
    },
  },
  listItem: {
    width: "80%",
    color: "black",
    textDecoration: "none",
    height: "50px",
    display: "flex",
    cursor: "pointer",
    border: "1px solid gray",
    fontSize: "clamp(14px, 12px + 1vw, 21px)",
    alignItems: "center",
    padding: "0px 8px",
    justifyContent: "space-between",
    [theme.breakpoints.down(950)]: {
      width: "70%",
    },
    [theme.breakpoints.down(700)]: {
      width: "90%",
    },
    [theme.breakpoints.down(400)]: {
      height: "40px",
    },
  },
}));
