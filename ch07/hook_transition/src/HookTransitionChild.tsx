import { memo } from "react";
import books from "./books";
import type { Comment, Comments } from "./comments";

const sleep = (delay: number) => {
    const start = Date.now();
    while (Date.now() - start < delay){/*비었음*/}
};

export function BookDetail({ isbn }: { isbn: string }) {
    const book = books.find(b => b.isbn === isbn);
    return (
        <ul>
            <li>ISBN: {book?.isbn}</li>
            <li>도서명: {book?.title}</li>
            <li>가격: {book?.price}원</li>
            <li>개요: {book?.summary}</li>
            <li>예제 코드: {(book?.download) ? "있음" : "없음"}</li>
        </ul>
    )
}

export const CommentList = memo(function({src, isPending}: {src: Comments; isPending?: boolean;}) {
    if (isPending) {
        return <p>Now Loading...</p>;
    }

    return (
        <ol>
            {src.map((c) => <CommentItem  key={c.id} src={c} />)}
        </ol>
    );
});

function CommentItem({ src }: { src: Comment }) {
    sleep(1000);
    return <li>{src.body}({src.rank})</li>;
}