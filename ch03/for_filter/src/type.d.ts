type Book = {
  isbn: string;
  title: string;
  slug: string;
  price: number;
  summary: string;
  download: boolean;
}

type Books = Array<Book>;