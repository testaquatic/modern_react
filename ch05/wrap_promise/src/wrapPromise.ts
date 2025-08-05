import type { ReactNode } from "react";

export function wrapPromise(promise: Promise<ReactNode>) {
    let status: "fulfilled" | "rejected" | "pending" = "pending";
    let data: ReactNode;
    const wrapper = promise.then(
        (result) => {
            status = "fulfilled";
            data = result;
        },
        (e) => {
            status = "rejected";
            data = e;
        },
    );

    return {
        get() {
            switch (status) {
                case "fulfilled":
                    return data;
                case "rejected":
                    throw data;
                case "pending":
                    throw wrapper;
                default:
                    break;
            }
        },
    };
}
