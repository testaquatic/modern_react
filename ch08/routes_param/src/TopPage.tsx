import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import MyHeader from "./MyHeader";

export default function TopPage() {
    const [, setCount] =
        useOutletContext<
            [number, (setCount: (count: number) => void) => void]
        >();
    useEffect(() => setCount((count: number) => count + 1), [setCount]);
    return (
        <>
            <MyHeader />
            <p>홈페이지입니다.</p>
        </>
    );
}
