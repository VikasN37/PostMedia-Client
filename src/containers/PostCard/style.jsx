import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    height: "100%",
    borderRadius: "25px",
    "& .MuiCardHeader-root": {
      padding: "5px",
      margin: "2% 0px",
    },
    "& .MuiCardHeader-title": {
      fontSize: "clamp(12px, 6px + 1vw + 0.3vh, 17px)",
    },
    "& .MuiCardHeader-subheader": {
      fontSize: "clamp(10px, 4px + 1vw + 0.3vh, 15px)",
    },
    "& .MuiCardMedia-root": {
      height: "70%",
      marginBottom: "2%",
      [theme.breakpoints.down(1100)]: {
        height: "70%",
      },
    },

    "& .MuiCardContent-root": {
      padding: "0px 0px 0px 5px",
      marginBottom: "2%",
    },
    "& .MuiCardActions-root": {
      padding: "0px 0px 0px 5px",
      marginBottom: "2%",
    },
  },
  content: {
    fontSize: "clamp(14px, 8px + 1vw + 0.3vh, 19px)",
  },
}));
