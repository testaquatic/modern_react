export default function EventArgs() {
    const current = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const d = new Date();
        const e_target = e.target as HTMLButtonElement;
        const type = e_target.dataset.type;
        if (type === undefined) {
            return;
        }
        switch (type) { 
            case "date":
                console.log(`${e_target.id}: ${d.toLocaleDateString()}`);
                break;
            case "time":
                console.log(`${e_target.id}: ${d.toLocaleTimeString()}`);
                break;
            case "datetime":
                console.log(`${e_target.id}: ${d.toLocaleString()}`);
                break;
        }
    };

    return (
        <div> 
            <button id="dt" data-type="datetime" onClick={current}>현재 날짜 및 시각</button>
            <button id= "date" data-type="date" onClick={current}>현재 날짜</button>
            <button id= "time" data-type="time" onClick={current}>현재 시각</button>
        </div>
    );
}