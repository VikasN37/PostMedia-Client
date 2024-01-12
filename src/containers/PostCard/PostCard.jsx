import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStyles } from "./style";
import { useDeletePostMutation } from "../../apis/postsApi";

function PostCard({ post }) {
  const classes = useStyles();
  const [deletePost, { isSuccess, isError }] = useDeletePostMutation();

  const { _id, location, date, image, caption, liked } = post;

  function handleClick(e) {
    e.preventDefault();
    deletePost(_id);
  }

  return (
    <Card className={classes.card} elevation={3} sx={{ marginBottom: "20px" }}>
      <CardHeader
        title={location}
        subheader={date}
        avatar={
          <Avatar
            sx={{
              bgcolor: "red",
              width: "clamp(23px, 20px + 1vw + 1vh, 48px)",
              height: "clamp(23px, 20px + 1vw + 1vh, 48px)",
            }}
            // src={`http://127.0.0.1:8080/profilePhotos/${user.profilePhoto}`}
            https:aria-label="recipe"
          />
        }
      />

      <CardMedia
        component="img"
        image={`http://127.0.0.1:8080/postPhotos/${image}`}
        alt="Photo"
      />
      <CardContent className={classes.content}>{caption}</CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: liked ? "red" : "white" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{ fontSize: "clamp(16px, 12px + 2vw, 22px)" }} />
        </IconButton>

        <IconButton aria-label="share" onClick={handleClick}>
          <DeleteIcon sx={{ fontSize: "clamp(16px, 12px + 2vw, 22px)" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;
