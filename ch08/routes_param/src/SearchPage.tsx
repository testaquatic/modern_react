import { useParams } from "react-router-dom";

export default function SearchPage() {
    const {"*": keywords} = useParams();
    return <p>검색어 {keywords}의 페이지입니다.</p>;
}