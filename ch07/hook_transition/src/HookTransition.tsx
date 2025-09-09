import { useDeferredValue, useState, type ChangeEvent } from "react";
import books from "./books";
import { BookDetail, CommentList } from "./HookTransitionChild";
import commentList from "./comments";
import type { Comments } from "./comments";


export default function HookTransition() {
    const [isbn, setIsbn] = useState("");
    const [comments, setComments] = useState<Comments>([]);
    const deferredComments = useDeferredValue(comments);
    const isPending = comments !== deferredComments;

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const isbn = e.target.value;
        setIsbn(isbn);
        setComments(commentList.filter(c => c.isbn === isbn));
    };

    return (
        <>
          <select name="book" id="book" onChange={handleChange}>
            <option value="" disabled>선택해주세요</option>
            {books.map((b) => (
                <option key={b.isbn} value={b.isbn}>
                    {b.title}
                </option>
            ))}
            </select>
            <BookDetail isbn={isbn} />
            <hr />
            <CommentList src={deferredComments} isPending={isPending} />
        </>
    );
}