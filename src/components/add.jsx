import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Fab,
  Box,
  Typography,
  Modal,
  Button,
  Tooltip,
  Avatar,
  TextField,
  styled,
  ButtonGroup,
  Input,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import axios from "axios";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function Add() {
  const [newPost, setNewpost] = useState({});

  function handleChange(e) {
 
    console.log(e.target.name , e.target.value)
    setNewpost({...newPost,[e.target.name]:e.target.value});
  }

  function handleSubmit(e) 
  {
  e.preventDefault();
  addPosts(newPost)  
  
  }

  async function addPosts(newPost)
  {
     const res = await axios.post('http://localhost:8080/posts/create',newPost);
     console.log(res.data);
  }



  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add post"
        sx={{
          position: "fixed",
          left: { xs: "calc(50%)", sm: 10 },
          bottom: 20,
        }}
      >
        <Fab color="primary" aria-label="add" size="medium">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width="30%"
          height="40%"
          sx={{ bgcolor: "background.default", color: "text.primary" }}
          borderRadius={5}
          // textAlign={"center"}
          padding={5}
        >
          <Typography variant="h6" color={"gray"} mt={1} mb={3}>
            Create Post
          </Typography>

          <TextField
            id="standard-multiline-static"
            name="title"
            placeholder="Enter Title"
            variant="standard"
            sx={{ width: "100%", marginBottom: 4 }}
            onChange={handleChange}
          />

          <TextField
            id="standard-multiline-static"
            multiline
            rows={2}
            name="description"
            placeholder="Enter Description"
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
                Upload photo
                <input type="file" hidden name="img" />
              </Button>


{/* fix issue of date */}
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker sx={{ width: "40%" }} onChange={handleChange} />
                <input type="date" hidden name=""/>
              </LocalizationProvider> */}


            </ButtonGroup>
            <Button
              variant="contained"
              sx={{ fontSize: "18px", height: "2%" }}
              onClick={handleSubmit}
            >
              Post{" "}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default Add;
