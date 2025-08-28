import { useState, type ChangeEvent, type MouseEvent } from "react";
import "./StateTodo.css";

type todo = {
    id: number;
    title: string;
    created: Date;
    isDone: boolean;
};

let maxId = 0;
export function StateTodo() {
    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState<Array<todo>>([]);
    const [desc, setDesc] = useState(true);

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    
    const handleClick = () => setTodo([...todo, {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false,
    }]);

    const handleDone = (e: MouseEvent<HTMLButtonElement>) => {
        setTodo(todo.map((item) => {
            if (item.id === Number(e.currentTarget.dataset.id)){
                return {...item, isDone: true,};
            } else {
                return item;
            }
        }));
    };

    const handleRemove = (e: MouseEvent<HTMLButtonElement>) => {
        setTodo(todo.filter((item) => item.id !== Number(e.currentTarget.dataset.id)));
    };

    const handleSort = () => {
        const sorted = [...todo].sort((m, n) => {
            if (desc) {
                return n.created.getTime() - m.created.getTime();
            } else {
                return m.created.getTime() - n.created.getTime();
            }
        });

        setDesc((d) => !d);
        setTodo(sorted);
    }


    return (
        <div>
            <label htmlFor="title">해야 할 일</label>
            <input id="title" type="text" value={title} onChange={handleChangeTitle} />
            <button type="button" onClick={handleClick}>추가하기</button>
            <button type="button" onClick={handleSort}>정렬하기({desc ? "오름차순" : "내림차순"})</button>
            <hr />
            <ul>
                {todo.map((item) => {
                    return (  
                    <li key={item.id} className={item.isDone ? "done" : ""}>
                        {item.title}
                        <button type="button" data-id={item.id} onClick={handleDone}>완료</button>
                        <button type="button" data-id={item.id} onClick={handleRemove}>삭제</button>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}