import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { MaterialBasic } from "./MaterialBasic";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MaterialBasic />
        </ThemeProvider>
    );
}

export default App;
