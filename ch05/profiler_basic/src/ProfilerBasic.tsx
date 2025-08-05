import {
    Profiler,
    type ProfilerOnRenderCallback,
    type ReactElement,
} from "react";
import { HeavyUI } from "./HeavyUI";

export function ProfilerBasic(): ReactElement {
    const handleMeasure: ProfilerOnRenderCallback = (
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
    ) => {
        console.log("id: ", id);
        console.log("phase: ", phase);
        console.log("actualDuration: ", actualDuration);
        console.log("baseDuration: ", baseDuration);
        console.log("startTime: ", startTime);
        console.log("commitTime: ", commitTime);
    };

    return (
        <Profiler id="heavy" onRender={handleMeasure}>
            <HeavyUI delay={1500} />
            <HeavyUI delay={500} />
            <HeavyUI delay={2000} />
        </Profiler>
    );
}
