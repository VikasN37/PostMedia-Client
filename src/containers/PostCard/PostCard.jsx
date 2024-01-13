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
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from "../../apis/postsApi";
import { useGetUserQuery } from "../../apis/userApi";

function PostCard({ post }) {
  const classes = useStyles();

  const [deletePost, { isError }] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();

  const { _id, location, date, image, caption, liked } = post;

  function handleClick(e) {
    e.preventDefault();
    deletePost(_id);
  }
  const dateString = new Date(date);

  return (
    <Card className={classes.card} elevation={6} sx={{ marginBottom: "20px" }}>
      <CardHeader
        title={location}
        subheader={dateString.toDateString()}
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
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            updatePost({ id: _id, data: !liked });
          }}
        >
          <Checkbox
            icon={<Favorite sx={{ color: liked && "red" }} />}
            checkedIcon={<Favorite sx={{ color: liked && "red" }} />}
          />
        </IconButton>

        <IconButton aria-label="share" onClick={handleClick}>
          <DeleteIcon sx={{ fontSize: "clamp(16px, 12px + 2vw, 22px)" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;
