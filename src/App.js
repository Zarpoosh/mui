import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddOne from "./components/AddOne";
import { useState } from "react";
import React from "react";
import styled from "@emotion/styled";

// const Boxone=styled(Box)({
//   margin:"0px",
//   padding:""
// })

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* navbar */}
        <Navbar />
        {/*  end of navbar */}
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddOne />
        {/* <Add/> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
