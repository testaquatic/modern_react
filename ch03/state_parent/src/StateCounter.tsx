import type { ReactElement } from "react"
import "./StateCounter.css"

type StateCounterProps = {
  step: number
  onUpdate: (step: number) => void
}

export function StateCounter({ step, onUpdate }: StateCounterProps): ReactElement {
  const handleClick = () => onUpdate(step);

  return (
    <button className="cnt" onClick={handleClick}>
      <span>{step}</span>
    </button>
  )
}