import type { ButtonProps } from "./stories/Button";

export default function MyButton({
    primary = false,
    backgroundColor = undefined,
    size = "medium",
    label = "Button",
    handleClick,
    ...props
}: ButtonProps & { handleClick?: React.MouseEventHandler<HTMLButtonElement> }) {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (
        <button
            type="button"
            className={[
                "storybook-button",
                `storybook-button--${size}`,
                mode,
            ].join(" ")}
            style={{ backgroundColor }}
            onClick={handleClick}
            {...props}
        >
            {label}
        </button>
    );
}
