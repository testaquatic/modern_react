import type { MouseEvent, ReactElement } from "react";

export function EventObj():ReactElement {
  const handleClick = (e: MouseEvent) => console.log(e);
  return (
    <button onClick={handleClick}>클릭</button>
  );
}