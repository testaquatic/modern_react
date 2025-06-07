import type React from "react";
import "./StateCounter.css";


export default function StateCounter({step, onUpdate}: {step: number, onUpdate: (step: number) => void}): React.ReactNode {
    const handleClick = () => onUpdate(step);
    return (
        <button className="cnt" onClick={handleClick}>
            <span>{step}</span>
        </button>
    );
}