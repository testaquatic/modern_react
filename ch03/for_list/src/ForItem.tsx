import Download from "./Download";

export default function ForItem({ book }: { book: Book }) {

    return (
        <>
            <dt>
                <a href={`https://wikibook.co.kr/images/cover/s/${book.isbn}.jpg`}>
                    {book.title} ({book.price}원)
                </a>
            </dt>
            <dd>
                {book.summary}
                {book.download? <Download slug={book.slug} /> : null}
            </dd>
        </>
    )
}