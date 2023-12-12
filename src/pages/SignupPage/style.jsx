import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  page: {
    height: "100vh",
    padding: "0px",
  },

  content: {
    width: "100%",
    height: "100%",
  },
  sidebar: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: "clamp(14px , 10px + 0.5vw + 0.5vh , 25px)",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down(280)]: {
      //  justifyContent: "flex-start",
    },
  },
  formSection: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
    },
    flexDirection: "column",
    overflow: "auto",
    justifyContent: "center",
  },

  textField: {
    "& .MuiOutlinedInput-input": {
      fontSize: "clamp(12px, 10px + 1vw, 17px)",
      padding: "5px",
      height: "40px",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down(350)]: {
        height: "30px",
      },
    },
  },
  button: {
    width: "100%",
    margin: "10px 0px",
    height: "clamp(24px , 12px + 1vw + 2vh , 48px)",
    fontSize: "clamp(14px , 7px + 0.7vw + 0.3vh , 20px)",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: "none",
    cursor: "pointer",
  },
  listItem: {
    width: "60%",
    color: "black",
    textDecoration: "none",
    height: "50px",
    display: "flex",
    fontSize: "clamp(14px, 12px + 1vw, 21px)",
    alignItems: "center",
    padding: "0px 8px",
    justifyContent: "space-between",
    [theme.breakpoints.down(700)]: {
      width: "90%",
    },
    [theme.breakpoints.down(400)]: {
      height: "40px",
    },
  },
  uploadButton: {
    width: "50%",
  },
}));
