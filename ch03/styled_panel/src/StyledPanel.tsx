import type { PropsWithChildren } from "react";

export default function StyledPanel({children}: PropsWithChildren) {
    return (
        <div style={{
            margin: 50,
            padding: 50,
            border: "1px solid #000",
            width: "fit-content",
            boxShadow: "10px 5px 5px #999",
            backgroundColor: "#fff",
        }}>
            {children}
        </div>
    )
}