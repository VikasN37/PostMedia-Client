import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
     Fab,
     Box,
     Typography,
     Modal,
     Button,
     Tooltip,
     Avatar,
     TextField,
     styled
    
} from "@mui/material";
import { useState } from "react";

const VisuallyHiddenInput = styled('input')`
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
     const [open, setOpen] = useState(false)
     return (
          <>
               <Tooltip onClick={() => setOpen(true)}
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
                         width={450}
                         height={340}
                         sx={{bgcolor:'background.default' , color:'text.primary'}}
                         borderRadius={5}
                         // textAlign={"center"}
                         padding={5}
                    >
                         <Typography variant="h6" color={"gray"} mt={3}>
                              Create Post
                         </Typography>

                         <Box
                              sx={{ display: "flex", alignItems: "center", gap: 2, padding: 3 }}
                         >
                              <Avatar
                                   alt="Remy Sharp"
                                   src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                              />
                              <Typography fontWeight={500}>Mike</Typography>
                         </Box>

                         <TextField
                              id="standard-multiline-static"
                              multiline
                              rows={2}
                              placeholder="Enter description"
                              variant="standard"
                              sx={{ width: '100%' }}
                         />

                         <Button sx={{marginTop:4}}
                              component="label"
                              variant="contained"
                              startIcon={<CloudUploadIcon />}
                              href="#file-upload"
                         >
                              Upload photo
                              <VisuallyHiddenInput type="file" />
                         </Button>
                    </Box>


               </Modal>
          </>
     );
}

export default Add;
