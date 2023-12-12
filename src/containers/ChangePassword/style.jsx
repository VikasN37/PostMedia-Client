import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  outletContainer: {
    width: "100%",
    height: "100%",
  },

  listContainer: {
    width: "100%",
    height: "80%",
    gap: "2vh",
    minHeight: "400px",
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
  buttonContainer: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
  },
  backButton: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "6px",
    [theme.breakpoints.down(700)]: {
      width: "70%",
    },
  },
  backButtonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  uploadButton: {
    width: "50%",
  },
  textfield: {
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
}));
