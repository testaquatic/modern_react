import {
    Button,
    createTheme,
    CssBaseline,
    ThemeProvider,
    useMediaQuery,
} from "@mui/material";
import { amber, grey } from "@mui/material/colors";
import { useState } from "react";

export function MaterialMode() {
    const defaultMode = useMediaQuery("(prefers-color-scheme: dark)")
        ? "dark"
        : "light";
    const [mode, setMode] = useState<"light" | "dark">(defaultMode);
    const toggleMode = () =>
        setMode((prev) => (prev === "light" ? "dark" : "light"));

    const theme = createTheme({
        palette: {
            mode,
            ...(mode === "light"
                ? { primary: amber }
                : {
                      primary: { main: grey[500], contrastText: "#fff" },
                      background: { default: grey[900], paper: grey[900] },
                  }),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button variant="contained" onClick={toggleMode}>
                Mode {mode}
            </Button>
        </ThemeProvider>
    );
}
