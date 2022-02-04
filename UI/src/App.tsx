import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Form } from "./Form";

export const App = () => (
  <SnackbarProvider maxSnack={3}>
    <CssBaseline />
    <Form />
  </SnackbarProvider>
);
