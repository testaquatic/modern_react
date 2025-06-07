export default function EventObj() {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => console.log(e);

    return (
        <button onClick={handleClick}>클릭</button>
    );
}