import type { JSX } from "react";
import type { Book } from "./ForNest"


export function ForItem({ book }: { book: Book }): JSX.Element{
  return (
    <>
      <dt>
        <a href={`https://wikibook.co.kr/images/cover/s/${book.isbn}.jpg`}>
          {book.title} ({book.price}원)
        </a>
      </dt>
      <dd>
        {book.summary}
      </dd>
    </>
  );
}