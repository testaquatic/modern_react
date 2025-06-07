import ForItem from "./ForItem";

export default function ForNest({ src }: BookSrc) {
    src.sort((m, n) => m.price - n.price);
    return (
        <dl>
            {src.map(elem => <ForItem book = {elem} key = {elem.isbn} />)}
        </dl>
    )
}