import { Link } from "react-router-dom";

export default function InfoPage() {
    return (
        <>
        <p>Info 페이지입니다.</p>
        <Link to=".." relative="path" reloadDocument>상위</Link>
        </>
    );
}