import { useDebugValue, useReducer } from "react";

type Action = {
    type: "update" | "reset" | string;
    step?: number;
    init?: number;
};

export default function useCounter(init: number, step: number) {
    const [state, dispatch] = useReducer(
        (state: {count: number;}, action: Action) => {
            switch (action.type) {
                case "update":
                    return {count: state.count + (action.step??0)};
                case "reset":
                    return {count: action.init??0};
                default:
                    return state; 
            }
        }, {count: init},
    );

    useDebugValue(state.count >= 10 ? "10 Over" : "10 Less");

    const handleUp = () => dispatch({type: "update", step});
    const handleDown = () => dispatch({type: "update", step: -step});
    const handleReset = () => dispatch({type: "reset", init})

    return {state, handleUp, handleDown, handleReset};
}