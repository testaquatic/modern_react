import useCounter from "./UseCounter";

export default function HookCustom() {
    const counter = useCounter(0, 1);

    return (
        <>
        <button onClick={counter.handleUp}>카운트 업</button>
        <button onClick={counter.handleDown}>카운트 다운</button>
        <button onClick={counter.handleReset}>리셋</button>
        <span>{counter.state.count}번 클릭됐습니다.</span>
        </>
    );
}