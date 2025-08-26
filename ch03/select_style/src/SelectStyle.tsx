import "./SelectStyle.css"

export default function SelectStyle({mode}: {mode: string}) {
    return (
        <div className={`box ${mode === "light" ? "light" : "dark"}`}>
            Hello World!
        </div>
    );
}