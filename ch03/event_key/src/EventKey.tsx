export default function EventKey() {
    const handleKey: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.ctrlKey && e.key === 'q') {
            alert("이름은 20자 이내로 입력해 주세요.");
        }
    } 
    return (
        <form>
            <label>
                이름:
                <input type="text" size={20} onKeyDown={handleKey} />
            </label>
        </form>
    );
}