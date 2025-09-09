import { useReducer } from "react";

export default function HookReducer({init}: {init: number;}) {
    const [state, dispatch] = useReducer(
        (state: {count: number;}, action) => {
            switch (action.type) {
                case "update":
                    return {count : state.count + 1};
                default:
                    return state;
            }
        }, {
            count: init,
        }
    )

    const handleClick = () => {
        dispatch({type: "update"});
    };

    return (
        <>
            <button onClick={handleClick}>카운트</button>
            <p>{state.count}번 클릭되었습니다.</p>
        </>
    )
}