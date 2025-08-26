import books from "./books";
import React from "react";

export function ListTemplate({src, render}: {src: typeof books, render: (elem: typeof books[number]) => React.ReactElement}) {
    return (
        <dl>
            {src.map((book) => (
                <React.Fragment key={book.isbn}>
                    {render(book)}
                </React.Fragment>
            ))}
        </dl>
    )
}