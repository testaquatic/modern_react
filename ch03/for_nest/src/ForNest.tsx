import type { JSX } from "react";
import { ForItem } from "./ForItem";

export type Book = {
  isbn: string;
  title: string;
  slug: string;
  price: number;
  summary: string;
  download: boolean;
}

type ForNestProps = {
  src: Array<Book>;
}

export function ForNest({src}: ForNestProps): JSX.Element {
  return (
    <dl>
      {src.map((elem) => <ForItem book={elem} key={elem.isbn} />)}
    </dl>
  );
}