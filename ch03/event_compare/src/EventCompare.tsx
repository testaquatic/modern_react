import "./EventCompare.css"
import { useState, type JSX, type MouseEvent } from "react"

export function EventCompare(): JSX.Element {
  const [result, setResult] = useState("");
  const handleIn = (e: MouseEvent<HTMLElement>) => setResult((r) => {
    if (!(e.target instanceof HTMLElement)) {
      return r;
    }
    return `${r}Enter: ${e.target.id}<br />`;
  });
  const handleOut = (e: MouseEvent<HTMLElement>) => setResult((r) => {
    if (!(e.target instanceof HTMLElement)) {
      return r;
    }
    return `${r}Leave: ${e.target.id}<br />`;
  });

  return (
    <>
      <div id="outer" onMouseOver={handleIn} onMouseOut={handleOut}>
        외부 (outer)
        <p id="inner">
          내부 (inner)
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: result }}></div>
    </>
  );
}