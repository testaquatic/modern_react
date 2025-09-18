import { useLocation } from "react-router-dom";

export default function BookStatePage() {
    const {state: isbn = "979-1-1583-9517-9"} = useLocation();
    return <p>ISBN코드 {isbn}의 페이지입니다.</p>;
}