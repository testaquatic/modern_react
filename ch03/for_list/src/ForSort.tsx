import type books from "./books";
import ForItem from "./ForItem";

export default function ForSort({src}: React.PropsWithChildren & {src: typeof books;}) {
    src.sort((m, n) => m.price - n.price);
    return (
        <dl>
            {src.map((book) => <ForItem book={book} key={book.isbn} />)}
        </dl>
    );
}