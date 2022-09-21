import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Layout } from "./layout";
import { Home } from "./pages/home";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
