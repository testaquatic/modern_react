import type React from "react";
import "./SelectStyle.css"
import classNames from "classnames";


export function SelectStyle({mode}: {mode: string}): React.ReactElement {
  return (
    <div className={classNames("box", {light: mode === "light", dark: mode === "dark"})}>
      Hello World!
    </div>
  );
}