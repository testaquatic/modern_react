import type { ReactElement } from "react";
import type { Book, Books } from "./books"
import React from "react";

type ListTemplate={
  src: Books;
  render: (elem: Book) => ReactElement;
}

export function ListTemplate({ src, render }: ListTemplate): ReactElement {
  return (
    <dl>
      {src.map((elem) => <React.Fragment key={elem.isbn}>{render(elem)}</React.Fragment>)}
    </dl>
  );
}