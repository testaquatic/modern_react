import type books from "./books";
import ForItem from "./ForItem";

export default function ForFilter({src}: React.PropsWithChildren & {src: typeof books;}) {
    const lowPrice = src.filter((book) => book.price < 25000);
    
    return (
        <dl>
            {lowPrice.map((book) => <ForItem book={book} key={book.isbn} />)}
        </dl>
    )
}