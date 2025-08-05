import type { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export function MyButton({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}): ReactElement {
    return (
        <button type="button" className={className}>
            {children}
        </button>
    );
}

export const MyStyledButton = styled(MyButton)`
    display: block;
    background-color: royalblue;
    color: white;
    font-weight: bold;
    width: 80px;
    height: 50px;
`;
