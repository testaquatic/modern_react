import type { ReactElement } from "react";

export function ErrorThrow(): ReactElement {
    throw new Error("Error is occured in MyApp.");
}
