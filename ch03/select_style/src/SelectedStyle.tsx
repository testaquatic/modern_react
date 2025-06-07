import "./SelectedStyle.css"
import cn from "classnames";

type Mode = {
    mode: "light" | "dark"
}

export default function SelectedStyle({ mode }: Mode) {
    return (
        <div className={cn(`box`, ["panel", {light: mode === "light", dark: mode === "dark"}])}>
            Hello World!
        </div>
    )
}