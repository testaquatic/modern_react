import { createContext } from "react";
import { HookContextChild } from "./HookContextChild";

export const MyAppContext = createContext<typeof config | null>(null);
const config = {
    title: "React 입문",
    lang: "ko-KR",
};


export default function HookContext() {
    return (
        <MyAppContext.Provider value={config}>
            <div id = "c_main"><HookContextChild /></div>
        </MyAppContext.Provider>
    )
}