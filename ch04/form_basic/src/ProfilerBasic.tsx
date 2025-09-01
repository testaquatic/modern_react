import  { Profiler } from "react";
import { HeavyUI } from "./HeavyUI";

export function ProfilerBasic() {
    const handleMeasure = (id: unknown, phase: unknown, actualDuration: unknown, baseDuration: unknown, startTime: unknown, endTime: unknown) => {
        console.log("id            :", id);
        console.log("phase         :", phase);
        console.log("actualDuration:", actualDuration);
        console.log("baseDuration  :", baseDuration);
        console.log("startTime     :", startTime);
        console.log("endTime       :", endTime);
    };

    return (
        <Profiler id="heavy" onRender={handleMeasure}>
            <HeavyUI delay={1500} />
            <HeavyUI delay={500} />
            <HeavyUI delay={2000} />
        </Profiler>

    )
}