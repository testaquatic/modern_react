import { useState, type ChangeEvent, type MouseEvent, type ReactElement } from "react";
import "./StateTodo.css";

let maxId = 0;
export function StateTodo(): ReactElement {
    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState(new Array<{ id: number, title: string, created: Date, isDone: boolean }>());
    const [desc, setDesc] = useState(true);

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(() => e.target.value);
    const handleClick = () => setTodo((todo) => [...todo, { id: ++maxId, title, created: new Date(), isDone: false }]);
    const handleDone = (e: MouseEvent<HTMLButtonElement>) => setTodo(
        (todo) => todo.map((item) => {
            if (e.target instanceof HTMLButtonElement) {
                if (item.id === Number(e.target.dataset.id)) {
                    return { ...item, isDone: true };
                } else {
                    return item;
                }
            }

            return item;
        }
        ));
    const handleRemove = (e: MouseEvent<HTMLButtonElement>) => 
        setTodo((todo) => todo.filter((item) => {
            if (e.target instanceof HTMLButtonElement) {
                return item.id != Number(e.target.dataset.id);
            }
            return false;
        }));

    const handleSort = () => {
        const sorted = [...todo];
        sorted.sort((m, n) => {
            if (desc) {
                return n.created.getTime() - m.created.getTime();
            } else {
                return m.created.getTime() - n.created.getTime();
            }
        });
        setDesc((d) => !d);
        setTodo(() => sorted);
    }

    return (
        <div>
            <label htmlFor="title">해야 할 일: </label>
            <input type="text" name="title" id="title" value={title} onChange={handleChangeTitle} />
            <button type="button" onClick={handleClick}>추가하기</button>
            <button type="button" onClick={handleSort}>정렬({desc ? "내림차순" : "오름차순"})</button>
            <hr />
            <ul>
                {
                    todo.map((item) =>
                    
                        <li key={item.id} className={item.isDone ? "done" : ""}>
                            {item.title}
                            <button type="button" onClick={handleDone} data-id={item.id}>완료</button>
                            <button type="button" onClick={handleRemove} data-id={item.id}>삭제</button>
                        </li>
                        
                    )
                }
            </ul>
        </div>
    );
}