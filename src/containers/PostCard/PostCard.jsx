import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStyles } from "./style";

function PostCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card} elevation={5}>
      <CardHeader
        title="Location"
        subheader="Date"
        avatar={
          <Avatar
            sx={{
              bgcolor: "red",
              width: "clamp(23px, 20px + 1vw + 1vh, 48px)",
              height: "clamp(23px, 20px + 1vw + 1vh, 48px)",
            }}
            src="https://picsum.photos/40/40"
            https:aria-label="recipe"
          />
        }
      />

      <CardMedia
        component="img"
        className={classes.cardMedia}
        image="https://picsum.photos/250/200"
        alt="Paella dish"
      />
      <CardContent className={classes.content}>
        This is my first image
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ fontSize: "clamp(16px, 12px + 2vw, 22px)" }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{ fontSize: "clamp(16px, 12px + 2vw, 22px)" }} />
        </IconButton>

        <IconButton aria-label="share">
          <DeleteIcon sx={{ fontSize: "clamp(16px, 12px + 2vw, 22px)" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;
