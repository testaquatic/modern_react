export function StateCounter({step, onUpdate}: {step: number, onUpdate: (step: number) => void}) {
    const handleClick = () => onUpdate(step);
    return (
        <button className="cnt" onClick={handleClick}>
            <span>{step}</span>
        </button>
    )
}