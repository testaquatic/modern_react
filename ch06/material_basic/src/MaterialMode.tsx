import { Button, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { amber, grey } from "@mui/material/colors";
import { useState } from "react";

export default function MaterialMode() {
    const default_mode = useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light";
    const [mode, setMode] = useState<"light" | "dark">(default_mode);
    const toggleMode = () => setMode(prev => prev === "light" ? "dark" : "light");
    
    const theme = createTheme({
        palette: {
            mode,
        ...(mode === "light" ? {primary: amber}: {primary: {
                main: grey[500], contrastText: "#fff"
            },
            background: {
                default: grey[900],
                paper: grey[900],
            }
        })
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={toggleMode}>Mode {mode}</Button>
        </ThemeProvider>
    );
}