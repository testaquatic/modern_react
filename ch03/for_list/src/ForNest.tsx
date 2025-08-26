import type React from "react";
import type books from "./books";
import ForItem from "./ForItem";

export default function ForNest({src}: React.PropsWithChildren & {src: typeof books;}) {
    return (
        <dl>
            {src.map((book) => <ForItem book={book} key={book.isbn} />)}
        </dl>
    );
}