import type React from "react";
import type { Book } from "./books"
import { Download } from "./Download";

export function ForItem({ book }: { book: Book }): React.ReactElement {
  return (
    <>
      <dt>
        <a href={`https://wikibook.co.kr/images/cover/s/${book.isbn}.jpg`}>{book.title} ({book.price}원)</a>
      </dt>
      {(() => {
        if (book.download) {
          return <dd>{book.summary}<Download slug={book.slug} /></dd>
        } else {
          return <dd>{book.summary}</dd>
        }
      })()}
    </>
  );
}