export function EventObj() {
    const handleClick = (e: unknown) => console.log(e);

    return (
        <button onClick={handleClick}>클릭</button>
    )
}