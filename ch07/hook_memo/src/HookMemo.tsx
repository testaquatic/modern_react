import { useCallback, useMemo, useState } from "react";
import { MyButton, MyCounter } from "./HookCounterChild";

const sleep = (delay: number) => {
    const start = Date.now();
    while (Date.now() - start < delay) { /* 비었음 */}
}

export default function HookMemo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment = useCallback(() => setCount1(c => c + 1), []);
    const decrement =  useCallback(() => setCount2(c => c - 1), []);

    const heavyProcess = useMemo(() => {
        sleep(1000);
        return count1 + 100;
    }, [count1]);

    return (
        <>
            <div>
                <MyButton id="btn1" handleClick={increment}>카운트업</MyButton>
                <MyCounter id="c1" value={count1} /> /
                {heavyProcess}
            </div>
            <div>
                <MyButton id="btn2" handleClick={decrement}>카운트다운</MyButton>
                <MyCounter id="c2" value={count2} />
            </div>
        </>
    );

}