export type Book = {
    isbn: string;
    title: string;
    slug: string;
    price: number;
    summary: string;
    download: boolean;
};

export type Books = Book[];

declare module "./books" {
    const books: Books;
    export default books;
}
