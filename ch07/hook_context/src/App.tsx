import HookContext from "./HookContext";
import HookThemeButton from "./HookThemeButton";
import MyThemeProvider from "./MyThemeProvider";

function App() {
    return (
    <>
    <HookContext />
    <MyThemeProvider>
        <HookThemeButton />
    </MyThemeProvider>
    </>
    );
}

export default App
