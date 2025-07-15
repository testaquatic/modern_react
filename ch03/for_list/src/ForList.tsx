import type { JSX } from "react";
import React from "react";

type ForListProps = {
  src: Books;
}

type Books = {
    isbn: string;
    title: string;
    slug: string;
    price: number;
    summary: string;
    download: boolean;
}[]


export function ForList({ src }: ForListProps): JSX.Element {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>
          <dt>
            <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>
              {elem.title} ({elem.price}원)
            </a>
          </dt>
          <dd>
            {elem.summary}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  )
}