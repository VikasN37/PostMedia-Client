import { Box, Button, CssBaseline, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function SignUp() {
  const [newUser, setnewUser] = useState({});

  function handleChange(e) {
    setnewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    addUser(newUser);
  }

  async function addUser(newUser) {
    await axios.post("http://localhost:8080/authentication/signup", newUser);
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
          <Box border={"2px solid "} padding={4} marginTop={5}>
            <Typography variant="h5" fontWeight={"500"} textAlign={"center"}>
              Create Account
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
              onChange={handleChange}
              sx={{ marginTop: 3 }}
            />

            <TextField
              id="username"
              label="Enter username"
              type="string"
              name="username"
              autoComplete="current-password"
              variant="standard"
              required
              fullWidth
              sx={{ marginTop: 3 }}
              onChange={handleChange}
            />

            <TextField
              id="password"
              label="Create Password "
              type="password"
              name="password"
              autoComplete="current-password"
              variant="standard"
              required
              fullWidth
              sx={{
                marginTop: 4,
              }}
              onChange={handleChange}
            />
            <TextField
              error={
                newUser.password !== newUser.confirmpassword ? true : false
              }
              id="password-confirmation"
              label={!newUser.confirmpassword ? 'Confirm Password' : newUser.password !== newUser.confirmpassword ? "Password does not match" : "Password Matched"}
              type="password"
              name="confirmpassword"
              autoComplete="current-password"
              variant="standard"
              required
              fullWidth
              onChange={handleChange}
              sx={{
                marginTop: 4,
                marginBottom: 3,
              }}
            />

            <Button
              variant="contained"
              sx={{ mb: 2, padding: 1, width: "100%" }}
              // href="/"

              disabled={
                !newUser.password
                  ? true
                  : newUser.password === newUser.confirmpassword
                    ? false
                    : true
              }
              onClick={handleSubmit}
            >
              <Typography fontSize={"clamp(12px, 3px + 1vw, 24px )"}>
                Create Account
              </Typography>
            </Button>
            <Typography fontSize={"clamp(12px, 3px + 1vw, 24px )"}>
              Already have an account ? <a href="/login">Login</a>
            </Typography>
          </Box>
        </Box>
      </CssBaseline>
    </>
  );
}
export default SignUp;
