import React from "react";
import type { Books } from "./books";

export function ForSort({ src }: { src: Books }) {
  src.sort((m, n) => m.price - n.price);

  return (
    <dl>
      {
        src.map((book) => (
          <React.Fragment key={book.isbn}>
            <dt>
              <a href={`https://wikibook.co.kr/images/cover/s/${book.isbn}.jpg`}>
                {book.title} ({book.price}원)
              </a>
            </dt>
            <dd>{book.summary}</dd>
          </React.Fragment>
        ))
      }
    </dl>
  );
}