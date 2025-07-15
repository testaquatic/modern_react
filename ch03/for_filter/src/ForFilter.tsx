import type { JSX } from "react";
import React from "react";

type ForFilterProps = { src: Books };

export function ForFilter({ src }: ForFilterProps): JSX.Element { 
  const lowPrice = src.filter(book => book.price < 25_000);

  return (
    <dl>
      {
        lowPrice.map(elem => (
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
        ))
      }
    </dl>
  );
}