/* eslint-disable react/prop-types */
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
import { Favorite } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStyles } from "./style";
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from "../../apis/postsApi";
import { useGetUserQuery } from "../../apis/userApi";

function PostCard({ post }) {
  const classes = useStyles();

  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const { data, isSuccess } = useGetUserQuery();

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
            src={
              isSuccess &&
              `https://postmedia-backend.onrender.com/profilePhotos/${data.data.user.profilePhoto}`
            }
            https:aria-label="recipe"
          />
        }
      />

      <CardMedia
        component="img"
        image={`https://postmedia-backend.onrender.com/postPhotos/${image}`}
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
