type Books = Book[];

type Book = {
    isbn: string;
    title: string;
    slug: string;
    price: number;
    summary: string;
    download: boolean;
}

type BookSrc = {
    src: Books;
}