import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import axios from "axios";

function Post({
  _id,
  title,
  date,
  img,
  description,
  handleDelete,

}) {
  const [open, setisOpen] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({});

  function handleOpen() {
    setisOpen(open ? false : true);
  }
  function handleChange(e) {
    setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }

  function handleEdit(id) {

    setUpdatedPost(updatedPost);
    updatePosts(id, updatedPost);
    setisOpen(false)

  }

  async function updatePosts(id, updatedProduct) {
    const res = await axios.patch(
      `http://localhost:8080/posts/edit/${id}`, updatedProduct);
  }

  return (
    <>
      <Card sx={{ margin: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="edit" onClick={handleOpen}>
              <EditIcon />
            </IconButton>
          }
          title={title}
          subheader={date}
        />
        <CardMedia
          component="img"
          height="400px"
          image={img}
          alt={title}
          className="fluid"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share" onClick={() => handleDelete(_id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Modal
        open={open}
        onClose={() => setisOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          width="30%"
          height="40%"
          sx={{ bgcolor: "background.default", color: "text.primary" }}
          borderRadius={5}
          padding={5}
        >
          <Typography variant="h6" color={"gray"} mt={1} mb={3}>
            Update Post
          </Typography>

          <Typography color={"gray"}>New Title :</Typography>
          <TextField
            id="standard-multiline-static"
            name="title"
            placeholder="Enter new Title"
            defaultValue={title}
            variant="standard"
            sx={{ width: "100%", marginBottom: 4 }}
            onChange={handleChange}
          />
          <Typography color={"gray"}>New Description :</Typography>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={2}
            name="description"
            placeholder="Enter new Description"
            defaultValue={description}
            variant="standard"
            onChange={handleChange}
            sx={{ width: "100%" }}
          />

          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ marginTop: 4 }}
          >
            <ButtonGroup>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                onChange={handleChange}
              >
                Change photo
                <input type="file" hidden name="img" />
              </Button>
            </ButtonGroup>
            <Button
              variant="contained"
              sx={{ fontSize: "18px", height: "2%" }}
              onClick={() => handleEdit(_id)}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default Post;
