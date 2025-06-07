import React from "react";


export default function ListTemplate({ src, render }: { src: BookSrc[]; render: ((elem: BookSrc) => React.ReactNode); }) {
    return (
        <dl>
            {src.map((elem) => (
                <React.Fragment key={elem.isbn}>
                    {render(elem)}
                </React.Fragment>
            ))}
        </dl>
    );

}