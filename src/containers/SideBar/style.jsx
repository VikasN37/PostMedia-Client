import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  profileSection: {
    height: "100%",
    width: "100%",
    gap: "clamp(10px, -5px + 4vh, 28px)",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0px",
      gap: "15px",
    },
  },
  profilePart: {
    width: "100%",
    marginBottom: "0.4vh",
  },
  profilePhoto: {
    width: "clamp(50px, 40px + 5vw + 10vh, 250px)",
    border: `2px solid ${theme.palette.primary.main}`,
    height: "clamp(50px, 40px + 5vw + 10vh, 250px)",
    borderRadius: "50%",
  },
  username: {
    fontSize: "clamp(20px, 12px + 1.1vw + 1vh, 30px)",
    fontWeight: "400",
    marginBottom: "0.4vh",
    [theme.breakpoints.down("md")]: {
      fontWeight: "300",
    },
    "@media (max-height: 400px)": {
      marginBottom: "0px",
    },
  },
  name: {
    fontSize: "clamp(15px, 10px + 1vw + 1vh, 25px )",
    fontWeight: "300",
    [theme.breakpoints.down("md")]: {
      fontWeight: "200",
    },
    marginBottom: "0.5vh",
    "@media (max-height: 400px)": {
      marginBottom: "0px",
    },
  },
  nameSection: {
    width: "100%",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
    [theme.breakpoints.down(280)]: {
      alignItems: "center",
    },
  },
  buttons: {
    textDecoration: "none",
    fontSize: "clamp(12px, 7px + 0.8vw + 0.5vh, 24px )",
    marginBottom: "clamp(5px, 2px + 1.2vh, 12px)",
    borderRadius: "4px",
    padding: "clamp(4px, 2px + 0.8vh, 8px) 0px clamp(3px, 1px + 0.6vh, 5px)",
    gap: "clamp(5px, 2px + 2.5vh, 20px)",
    display: "flex",
    justifyContent: "center",
    width: "80%",
    border: `1px solid ${theme.palette.primary.main}`,
    fontWeight: "400",
    "&.active": {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("md")]: {
      fontWeight: "300",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6px 0px 4px",
      marginBottom: "5px",
      gap: "15px",
    },
    "@media (max-height: 400px)": {
      marginBottom: "6px",
    },
  },
  btnCount: {
    fontSize: "inherit",
    width: "40%",
    display: "flex",
    justifyContent: "flex-end",
  },
  btnCountText: {
    textAlign: "center",
    minWidth: "50%",
    color: "inherit",
    fontSize: "inherit",
  },
  btnText: {
    textAlign: "left",
    flexGrow: "1",
    color: "inherit",
    fontSize: "inherit",
  },
  divider: {
    color: "black",
    backgroundColor: theme.palette.primary.main,
    height: "1px",
    marginBottom: "clamp(3px, 1px + 1.2vh, 10px)",
    width: "80%",
  },
}));
