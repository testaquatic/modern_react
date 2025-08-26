import type { PropsWithChildren } from "react";

type MyHelloProps = PropsWithChildren & {myName: string;};
export default function MyHello({myName = "김철수"}: MyHelloProps) {
    return (
        <div>안녕하세요. {myName}님!</div>
    )
}