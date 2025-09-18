import { useMatches } from "react-router-dom";

type MyHeaderProps = {
    title: string;
    keywords: string;
    description: string;
};

function isMyHeaderProps(props: any): props is MyHeaderProps {
    return (
        typeof props === "object" &&
        props.title !== undefined &&
        typeof props.title === "string" &&
        props.keywords !== undefined &&
        typeof props.keywords === "string" &&
        props.description !== undefined &&
        typeof props.description === "string"
    );
}

export default function MyHeader(props?: MyHeaderProps | {}) {
    let title = document.querySelector("title");
    if (!title) {
        title = document.createElement("title");
        document.head.appendChild(title);
    }

    const matches = useMatches().at(-1)?.handle;
    if (!isMyHeaderProps(matches)) {
        return <></>;
    }

    if (isMyHeaderProps(props)) {
        matches.title = matches.title.replace("%s", props.title);
        matches.keywords = matches.keywords.replace("%s", props.keywords);
        matches.description = matches.description.replace(
            "%s",
            props.description,
        );
    }

    title.text = matches.title;

    console.log(matches);

    return (
        <>
            <meta name="keywords" content={matches.keywords} />
            <meta name="description" content={matches.description} />
        </>
    );
}
