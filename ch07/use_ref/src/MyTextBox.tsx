import { forwardRef, useImperativeHandle, useRef, type Ref } from "react";

const MyTextBox = forwardRef(({label}: {label: string}, ref: Ref<HTMLInputElement>) =>{
    const input = useRef<HTMLInputElement>(null);
    useImperativeHandle<object, {focus(): void}>(ref, () => {
        return {
            focus() {
                input.current?.focus();
            },
        };
    }, []);

    return (
        <label>
            {label} : 
            <input ref={input} type="text" size={15} />
        </label>
    );
});


export default MyTextBox;