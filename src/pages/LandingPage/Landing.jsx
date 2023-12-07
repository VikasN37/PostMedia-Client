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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },

  // {
  //   img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
  //   title: "Tomato basil",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  //   title: "Sea star",
  // },
];

function LandingPage() {
  const classes = useStyles();
  const down700 = useMediaQuery("(max-width:700px)");
  return (
    <Grid
      container
      className={classes.page}
      flexDirection={"column"}
      gap={"3vh"}
    >
      <Grid container item className={classes.navbar}>
        <Grid item className={classes.logo}>
          <Typography
            fontSize={"clamp(16px , 15px + 1vw , 24px)"}
            fontWeight={"500"}
          >
            <CameraAltIcon
              fontSize="28px"
              sx={(theme) => ({
                [theme.breakpoints.down(600)]: {
                  display: "none",
                },
              })}
            />{" "}
            PostMedia
          </Typography>
        </Grid>

        <Box item className={classes.buttonSection}>
          <Button variant="contained" className={classes.navButtons}>
            About Us
          </Button>
          <Button variant="contained" className={classes.navButtons}>
            Login{" "}
          </Button>
          <Button variant="contained" className={classes.navButtons}>
            {" "}
            Join Now{" "}
          </Button>
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
              <Button className={classes.button}>Get Started</Button>
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

            <ImageList
              sx={{ width: "100%", height: "60%" }}
              cols={2}
              rowHeight={"100%"}
            >
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

      <Grid container item height={"500px"} justifyContent={"space-around"}>
        <Grid item container justifyContent={"center"} marginBottom={"3vh"}>
          <Typography variant="h4" gutterBottom>
            <b>
              <u>Why choose us</u>
            </b>
          </Typography>
        </Grid>
        <Grid item className={classes.cardContainer}>
          <Card
            sx={{
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              className={classes.cardMedia}
              image={`${safe}`}
              sx={{ objectFit: "contain" }}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "clamp(14px, 9px + 1vw + 1vh, 32px)",
                  fontWeight: "600",
                }}
                textAlign={"center"}
              >
                Safe and Secure
              </Typography>
              <Typography
                variant="h6"
                color="text.primary"
                textAlign={"center"}
              >
                PostMedia is 100% safe and secure to use. Only you can see your
                photos after authentication
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.cardContainer}>
          <Card sx={{ justifyContent: "center", height: "100%" }}>
            <CardMedia
              component="img"
              className={classes.cardMedia}
              image={`${features}`}
              alt="green iguana"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "clamp(14px, 9px + 1vw + 1vh, 32px)",
                  fontWeight: "600",
                }}
                textAlign={"center"}
              >
                Features
              </Typography>
              <Typography
                variant="h6"
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
          <Card sx={{ justifyContent: "center", height: "100%" }}>
            <CardMedia
              component="img"
              image={`${thumbsup}`}
              alt="green iguana"
              sx={{ objectFit: "contain" }}
              className={classes.cardMedia}
            />
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "clamp(14px, 9px + 1vw + 1vh, 32px)",
                  fontWeight: "600",
                }}
                textAlign={"center"}
              >
                No ads
              </Typography>
              <Typography
                variant="h6"
                color="text.primary"
                textAlign={"center"}
              >
                PostMedia believes in zero disturbance. This is the reason there
                are no ads or pop up
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
