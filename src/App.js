import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Stack, Box, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import { Add } from "./components/Add";
import React from "react";

export default function App() {
  const [mode, setMode] = React.useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setMode={setMode} mode={mode}/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}
