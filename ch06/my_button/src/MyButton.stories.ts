import MyButton from "./MyButton";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";

const meta = {
    title: "MyApp/MyButton",
    component: MyButton,
    tags: ["autodocs"],
    args: {
        handleClick: (e) => {
            action("handleClick")(e, new Date());
        },
    },
} satisfies Meta<typeof MyButton>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
    args: {
        primary: true,
        size: "medium",
        label: "버튼",
    },
};

export const White: StoryObj<typeof meta> = {
    args: {
        size: "small",
        label: "버튼",
        backgroundColor: "#fff",
    },
};

export const Yellow: StoryObj<typeof meta> = {
    args: {
        ...White.args,
        backgroundColor: "lightyellow",
    },
};
