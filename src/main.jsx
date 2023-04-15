import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SnackbarProvider } from 'notistack';
import { Slide } from '@mui/material';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      TransitionComponent={Slide}
      maxSnack={3}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
