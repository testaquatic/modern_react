import type { PropsWithChildren } from "react";
import type books from "./books";
import React from "react";

type ForListProps = PropsWithChildren & {
  src: typeof books;
};

export default function ForList({src}: ForListProps) {
    return (
        <dl>
            {src.map((book) => <React.Fragment key={book.isbn}>
                <dt><a href={`https://wikibook.co.kr/images/cover/s/${book.isbn}.jpg`}>{book.title} ({book.price}원)</a></dt>
                <dd>{book.summary}</dd>
            </React.Fragment>)}
        </dl>
    )
}