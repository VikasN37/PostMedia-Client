import {
  Box,
  Grid,
  ImageListItem,
  Typography,
  ImageList,
  useMediaQuery,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
import { useStyles } from "./style";
import { Button } from "@mui/base";
import safe from "../../assets/safe.png";
import features from "../../assets/features.png";
import thumbsup from "../../assets/thumbsup.png";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import message from "../../assets/message.ico";
import github from "../../assets/github-icon.ico";
import linkedin from "../../assets/linkedin-icon.ico";
import { Link, NavLink } from "react-router-dom";
import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/pic2.avif";
import { ROUTES } from "../../constants";

const itemData = [
  {
    img: `${pic1}`,
    title: "Camera",
  },
  {
    img: `${pic2}`,
    title: "Coffee",
  },
];

function LandingPage() {
  const classes = useStyles();
  const down700 = useMediaQuery("(max-width:700px)");
  const down400 = useMediaQuery("(max-width:400px)");
  return (
    <Grid
      container
      className={classes.page}
      flexDirection={"column"}
      gap={"3vh"}
    >
      <Grid container item className={classes.navbar}>
        <Grid item className={classes.logo}>
          <Box display={"inline"} marginTop={"8px"}>
            <CameraAltIcon />
          </Box>
          <Box display={"inline"}>PostMedia</Box>
        </Grid>

        <Box item className={classes.buttonSection}>
          <Link smooth to={"/#about"} className={classes.navButtons}>
            <Box>About</Box>
          </Link>

          <NavLink to={ROUTES.LOGIN} className={classes.navButtons}>
            <Box>Login</Box>
          </NavLink>

          <NavLink to={ROUTES.SIGNUP} className={classes.navButtons}>
            <Box>Join Now</Box>
          </NavLink>
        </Box>
      </Grid>

      <Grid item container className={classes.heroSection}>
        <Grid item container className={classes.heroSectionContent}>
          <Grid
            item
            container
            width={"40%"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={(theme) => ({
              [theme.breakpoints.down(700)]: {
                width: "100%",
                height: "20%",
              },
            })}
          >
            <Box
              width="60%"
              justifyContent="center"
              sx={(theme) => ({
                [theme.breakpoints.down(700)]: {
                  width: "100%",
                  textAlign: "center",
                },
              })}
            >
              <Typography
                fontSize={"clamp(16px, 10px + 1vw + 1vh, 40px)"}
                fontWeight={"600"}
                gutterBottom
              >
                Welcome to PostMedia
              </Typography>
              <Typography
                fontSize={"clamp(12px, 9px + 1vw + 0.5vh, 20px)"}
                gutterBottom
              >
                A perfect app to save your memories as photos
              </Typography>
              <NavLink to={ROUTES.SIGNUP}>
                <Button variant="contained" className={classes.button}>
                  Get Started
                </Button>
              </NavLink>
            </Box>
          </Grid>

          <Grid
            item
            container
            height={down700 ? "40%" : "100%"}
            width={down700 ? "100%" : "50%"}
            justifyContent={"center"}
            padding={"10px"}
            alignItems={"center"}
          >
            {/* <Grid item className={classes.topPhoto}></Grid> */}

            <ImageList sx={{ width: "100%" }} cols={2}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Grid>

      {/* Why choose us */}

      <Grid item container justifyContent={"center"} marginTop={"2vh"}>
        <Typography
          fontSize={"clamp(13px, 10px + 0.8vw + 0.8vh , 26px)"}
          gutterBottom
        >
          <b>Why choose us</b>
        </Typography>
      </Grid>
      <Grid
        container
        item
        height={down400 ? "500px" : "400px"}
        overflow={"auto"}
        justifyContent={"space-evenly"}
        width={"100%"}
      >
        <Grid item className={classes.cardContainer}>
          <Card
            sx={{
              justifyContent: "center",
              height: "95%",
            }}
            elevation={9}
          >
            <CardMedia
              component="img"
              className={classes.cardMedia}
              image={`${safe}`}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "clamp(10px, 8px + 0.7vw + 1vh, 25px)",
                  fontWeight: "600",
                }}
                textAlign={"center"}
              >
                Safe and Secure
              </Typography>
              <Typography
                fontSize={"clamp(8px , 5px + 1.4vw + 1vh , 19px )"}
                color="text.primary"
                textAlign={"center"}
              >
                PostMedia is 100% safe and secure to use. Only you can see your
                photos
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.cardContainer}>
          <Card sx={{ justifyContent: "center", height: "95%" }} elevation={9}>
            <CardMedia
              component="img"
              className={classes.cardMedia}
              image={`${features}`}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "clamp(10px, 8px + 0.7vw + 1vh, 25px)",
                  fontWeight: "600",
                }}
                textAlign={"center"}
              >
                Features
              </Typography>
              <Typography
                fontSize={"clamp(8px , 5px + 1.4vw + 1vh , 19px )"}
                color="text.primary"
                textAlign={"center"}
              >
                The app contains all the necessary features that you will need
                for a gallery
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.cardContainer}>
          <Card sx={{ justifyContent: "center", height: "95%" }} elevation={9}>
            <CardMedia
              component="img"
              image={`${thumbsup}`}
              sx={{ objectFit: "contain" }}
              className={classes.cardMedia}
            />
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "clamp(10px, 8px + 0.7vw + 1vh, 25px)",
                  fontWeight: "600",
                }}
                textAlign={"center"}
              >
                No ads
              </Typography>
              <Typography
                fontSize={"clamp(8px , 5px + 1.4vw + 1vh , 19px )"}
                color="text.primary"
                textAlign={"center"}
              >
                PostMedia believes in zero disturbance. This is the reason there
                are no ads
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* footer */}

      <Grid
        container
        className={classes.footer}
        width={"100%"}
        flexDirection={down400 ? "column" : "row"}
        bgcolor="#0F1521"
      >
        <Grid
          item
          container
          width={down400 ? "100%" : "50%"}
          height={"100%"}
          flexDirection={"column"}
          marginBottom={"16px"}
          className={classes.container}
        >
          <Grid item className={classes.footerHeading} marginBottom={"12px"}>
            PostMedia
          </Grid>
          <Grid
            item
            className={classes.footerContent}
            justifyContent={"center"}
          >
            <Typography fontSize={"clamp(13px, 8px + 1vw, 20px)"}>
              With intuitive navigation and high-definition visuals, our app
              brings the gallery experience right to your device. Elevate your
              appreciation for art anytime, anywhere.{" "}
              <Link to="/signup">Register Now !</Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          width={down400 ? "100%" : "50%"}
          height={"100%"}
          flexDirection={"column"}
          className={classes.container}
        >
          <Grid item className={classes.footerHeading} marginBottom={"12px"}>
            {" "}
            About{" "}
          </Grid>
          <Grid item className={classes.footerContent}>
            <Typography fontSize={"clamp(13px, 8px + 1vw, 20px)"}>
              I am a passionate web developer committed to create website that
              are seamless, intuitive and that resonate with our clients&apos;
              visions. You can connect with me on different platforms.
            </Typography>
          </Grid>
          <Grid
            item
            container
            className={classes.iconsContainer}
            justifyContent={"space-evenly"}
          >
            <Grid item width={"25%"}>
              <Link to="mailto:vikas630602@gmail.com">
                <img alt="gmail" src={message} className={classes.icons} />
              </Link>
            </Grid>
            <Grid item width={"25%"}>
              <Link to="https://github.com/VikasN37">
                <img alt="github" src={github} className={classes.icons} />
              </Link>
            </Grid>

            <Grid item width={"25%"}>
              <Link to="www.linkedin.com/in/vikas-niranjan/">
                <img alt="linkedin" src={linkedin} className={classes.icons} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
