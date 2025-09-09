import { CssBaseline } from "@mui/material";
import { amber, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, type ReactNode } from "react";
import ThemeContext from "./ThemeContext";

export default function MyThemeProvider({children}: {children: ReactNode}) {
    const [mode, setMode] = useState<"light" | "dark">("light");
    const themeConfig = {
        mode,
        toggleMode: () => setMode(prev => prev === "light" ? "dark" : "light"),
    };
    const theme = createTheme({
        palette: {
            mode,
            ...(mode === "light" ? {primary: amber} : {
                primary: {
                    main: grey[500],
                    contrastText: "#fff",
                },
                background: {
                    default: grey[900],
                    paper: grey[900],
                },
            }),
        },
    });

    return (
        <ThemeContext.Provider value={themeConfig}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
        </ThemeContext.Provider>
    );
}