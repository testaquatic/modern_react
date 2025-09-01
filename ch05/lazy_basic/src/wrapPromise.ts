export function wrapPromise<T>(promise: Promise<T>) {
    let status = "pending";
    let data: T;
    let wrapper = promise.then(
        result => {
            status = "fulfilled";
            data = result;
        },
        err => {
            status = "rejected";
            data = err;
        }
    );

    return ({
        get(): T | undefined {
            switch(status) {
                case "fulfilled":
                    return data;
                case "rejected":
                    throw data;
                case "pending":
                    throw wrapper;
                default:
                    break;
            }
        }
    })
}