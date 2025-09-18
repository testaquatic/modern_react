import React from "react";
import books from "./books";
import { NavLink, Outlet, useParams } from "react-router-dom";

export function BookListPage() {
    return (
        <>
            {books.map((b) => (
                <React.Fragment key={b.isbn}>
                    [<NavLink to={`/books/${b.isbn}`}>{b.title}</NavLink>]
                </React.Fragment>
            ))}
            <Outlet />
        </>
    );
}

export function BookDetailPage() {
    const { isbn = "979-1-1583-9517-9" } = useParams();
    const book = books.find((b) => b.isbn === isbn.replaceAll("-", ""));

    return (
        <ul>
            <li>ISBN 코드: {book?.isbn}</li>
            <li>도서명: {book?.title}</li>
            <li>가격: {book?.price}</li>
            <li>출간일: {book?.summary}</li>
        </ul>
    );
}
