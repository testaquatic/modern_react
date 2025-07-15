import type {ReactNode } from "react";
import type React from "react"

export function TitledPanel({ children }: {children: ReactNode}): React.ReactElement {
  if (!Array.isArray(children)) {
    return <div></div>;
  }

  const title = children.find((elem) => elem.key === "title");
  const body = children.find((elem) => elem.key === "body");

  return (
    <div style={{
      margin: 50,
      padding: 5,
      border: "1px solid black",
      width: "fit-content",
      boxShadow: "10px 5px 5px #999",
      backgroundColor: "white",
    }}>
      {title}
      <hr />
      {body}
    </div>
  );
}