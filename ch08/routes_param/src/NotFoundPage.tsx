import { useParams } from "react-router-dom";

export default function NotFoundPage() {
    const {"*":paths} = useParams();
    return <p>지정된 경로 {paths}가 존재하지 않습니다.</p>
}