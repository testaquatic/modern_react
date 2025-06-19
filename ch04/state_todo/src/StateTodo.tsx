import { useState } from "react";
import "./StateTodo.css";

let maxId = 0;
export function StateTodo() {
    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState<{ id: number, title: string, created: Date, isDone: boolean }[]>([]);
    const [desc, setDesc] = useState(true);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleClick = () => {
        setTodo([...todo, { id: maxId++, title, created: new Date(), isDone: false }]);
    };

    const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTodo(todo.map((item) => {
            if (!(e.target instanceof HTMLButtonElement)) {
                return item;
            }
            if (item.id === Number(e.target.dataset.id)) {
                return { ...item, isDone: true };
            }
            return item;
        }));
    };

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTodo(todo.filter((item) => {
            if (!(e.target instanceof HTMLButtonElement)) {
                return true;
            }
            return item.id !== Number(e.target.dataset.id);
        }));
    };

    const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => { 
        const sorted = [...todo];
        sorted.sort((m, n) => {
            if (desc) {
                return n.created.getTime() - m.created.getTime();
            } else {
                return m.created.getTime() - n.created.getTime();
            }
        });
        setDesc((d) => !d);
        setTodo(sorted);
    };

    return (
        <div>
            <label>
                해야할 일: 
                <input type="text" name="title" value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleClick}>추가하기</button>
            <button type="button" onClick={handleSort}>정렬하기({desc ? "오름차순" : "내림차순"})</button>
            <hr />
            <ul>
                {todo.map((item) => (
                    <li key={item.id} className={item.isDone ? "done" : ""}>
                        {item.title}
                        <button type="button" onClick={handleDone} data-id={item.id}>완료</button>
                        <button type="button" onClick={handleRemove} data-id={item.id}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}