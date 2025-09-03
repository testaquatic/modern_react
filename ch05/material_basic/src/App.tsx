import { CssBaseline, ThemeProvider } from "@mui/material";
import MaterialBasic from "./MaerialBasic";
import MaterialDrawer from "./MaerialDrawer";
import MaterialGrid from "./MaterialGrid";
import theme from "./theme";
import MaterialMode from "./MaterialMode";
import FormMui from "./FormMui";


function App() {
    return (
      <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <MaterialBasic />
      <MaterialDrawer />
      <MaterialGrid />
      <MaterialMode />
      <FormMui />
      </ThemeProvider>
      </>
    );
}

export default App
