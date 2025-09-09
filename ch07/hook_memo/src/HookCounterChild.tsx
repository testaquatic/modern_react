import { memo, type ReactNode } from "react";

export const MyButton = memo(({ id, handleClick, children }: { id: string, handleClick: () => void, children: ReactNode }) => {
    console.log(`MyButton is called: ${id}`);
    return (
        <button onClick={handleClick}>{children}</button>
    );
});

export const MyCounter = memo(({ id, value }: { id: string, value: number }) => {
    console.log(`MyCounter is called: ${id}`);
    return (
        <div>현재 값:{value}</div>
    );
});