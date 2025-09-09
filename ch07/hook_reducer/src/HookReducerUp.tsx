import { useReducer } from "react";

export default function HookReducerUp({init}: {init: number;}) {
    const [state, dispatch] = useReducer(
        (state: {count: number;}, action) => {
            switch (action.type) {
                case "update":
                    return { count: state.count + action.step };
                case "reset":
                    return { count: action.init };
                default:
                    return state;
            }
        }, {
            count: init,
    });

    const handleUp = () => dispatch({ type: "update", step: 1 });
    const handleDown = () => dispatch({ type: "update", step: -1 });
    const handleReset = () => dispatch({ type: "reset", init: 0 });

    return (
        <>
        <button onClick={handleUp}>카운트업</button>
        <button onClick={handleDown}>카운트다운</button>
        <button onClick={handleReset}>리셋</button>
        <p>{state.count}번 클릭되었습니다.</p>
        </>
    );  
}