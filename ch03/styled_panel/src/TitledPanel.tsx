import type { PropsWithChildren, ReactElement } from "react";

export default function TitledPanel({children}: PropsWithChildren) {
    if (!(children instanceof Array)) {
        return (<div>{children}</div>);
    }
    const title: ReactElement = children.find((elem: ReactElement) => elem.key == "title");
    const body: ReactElement = children.find((elem: ReactElement) => elem.key == "body");
    return (
        <div style={{
            margin: 50,
            padding: 50,
            border: "1px solid #000",
            width: "fit-content",
            boxShadow: "10px 5px 5px #999",
            backgroundColor: "#fff",
        }}>
            {title}
            <hr />
            {body}
        </div>
    );
}