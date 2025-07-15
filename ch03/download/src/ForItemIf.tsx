import React from "react";
import type { Book } from "./books";
import { Download } from "./Download";

export function ForItem({book}: {book: Book}): React.ReactElement {
  let dd;
  if (book.download) {
    dd = <dd>{book.summary}<Download slug={ book.slug} /></dd>
  } else {
    dd = <dd>{book.summary}</dd>
  }
  
  return (
    <React.Fragment>
      <dt>
        <a href={`https://wikibook.co.kr/images/cover/s/${book.isbn}.jpg`}>{book.title} ({book.price}원)</a>
      </dt>
      {dd}
    </React.Fragment>
  );
}