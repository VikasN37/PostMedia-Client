import { Box, Button, CssBaseline, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Signin() 
{

const[user , setUser] = useState({});

function handleChange(e)
{
  setUser({...user , [e.target.name] :e.target.value})

}
function handleSubmit()
{
  authenticate(user)
}

async function authenticate(user)
{
  await axios.post("http://localhost:8080/authentication/login", user);
}

  return (
    <>
      <CssBaseline>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
          width={"100%"}
        >
          <Box border={"2px solid "} padding={4} marginTop={10}>
            <Typography variant="h5" fontWeight={"500"} textAlign={"center"}>
              Login
            </Typography>
            <TextField
              id="email"
              label="Enter email"
              type="string"
              name="email"
              autoComplete="current-password"
              variant="standard"
              required
              fullWidth
              sx={{ marginTop: 3 }}
              onChange={handleChange}
            />

            <TextField
              id="password"
              label="Enter password"
              type="password"
              name="password"
              autoComplete="current-password"
              variant="standard"
              required
              fullWidth
              sx={{
                marginTop: 4,
                marginBottom: 3,
              }}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mb: 2, padding: 1 }}
              // href="/"
              onClick={handleSubmit}
            >
              <Typography fontSize={"clamp(12px, 3px + 1vw, 24px )"}>
               
                Login
              </Typography>
            </Button>
            <Typography fontSize={"clamp(12px, 3px + 1vw, 24px )"}>
              Didn't have the account ? <a href="/signup">Create Account</a>
            </Typography>
          </Box>
        </Box>
      </CssBaseline>
    </>
  );
}
export default Signin;
