import { useReducer } from "react";

function initCounter(init: number) {
    console.log("initCounter is called!!");
    return {
        count: Math.floor(Math.random() * (init + 1)),
    };
}

export default function HookReducerInit({init}: {init: number;}) {
    const [state, dispatch] = useReducer(
        (state: {count: number;}, action) => {
            switch (action.type) {
                case "update":
                    return {count : state.count + 1};
                default:
                    return state;
            }
        }, init, initCounter);

    const handleClick = () => {
        dispatch({type: "update"});
    };

    return (
        <>
            <button onClick={handleClick}>카운트</button>
            <p>{state.count}번 클릭되었습니다.</p>
        </>
    );
}