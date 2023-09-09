
import { Box, Stack, createTheme ,ThemeProvider } from "@mui/material";
import Feed from "./components/feed";
import Navbar from "./components/navbar";
import Rightbar from "./components/rightbar";
import Sidebar from "./components/sidebar";

import Add from "./components/add";
import { useState } from "react";






function App() {
  const [mode, setMode] = useState("light")


  const darkTheme = createTheme({
    palette: {
      mode:mode
    },
  })
  return (
  <>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{bgcolor:'background.default' , color:'text.primary'}} >
          <Navbar />


          <Stack direction='row' spacing={2} justifyContent={"space-between"}>
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
        </ThemeProvider>
    </>
      );
}

      export default App;
