import type { MouseEvent, ReactElement } from "react";

export function EventArgs(): ReactElement {
  const current: (type: string) => (e: MouseEvent) => void = (type: string) => (e: MouseEvent) => {
    const d = new Date();
    if (!(e.target instanceof Element)) {
      return;
    }

    switch (type) {
      case "date":
        console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
        break;
      case "time":
        console.log(`${e.target.id}: ${d.toLocaleTimeString()}`);
        break;
      default:
        console.log(`${e.target.id}: ${d.toLocaleString()}`);
        break;
    }
  }

  return (
    <div>
      <button id="dt" onClick={current("datetime")}>현재 날짜 및 시각</button>
      <button id="date" onClick={current("date")}>현재 날짜</button>
      <button id="time" onClick={current("time")}>현재 시각</button>
    </div>
  );
}