import { useParams } from "react-router-dom";
import books from "./books";
import MyHeader from "./MyHeader";

export default function BookPage() {
    const { isbn = "979-1-1583-9517-9" } = useParams();
    if (!/979-1-[0-9]{2,7}-[0-9]{2,7}-[0-9X]/.test(isbn)) {
        throw new RangeError("ISBN is invalid!");
    }
    const { title, summary } = books.find(
        (b) => b.isbn === isbn.replaceAll("-", ""),
    ) ?? {
        title: "",
        summary: "",
    };

    return (
        <>
            <MyHeader title={title} keywords={title} description={summary} />
            <p>ISBN코드 {isbn}의 페이지입니다.</p>
        </>
    );
}
