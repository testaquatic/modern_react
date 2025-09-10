import { useNavigate } from "react-router-dom";

export default function AboutPage() {
    const navigate = useNavigate();
    const handleClick = () => navigate("/");
    return (
        <>
        <p>About 페이지입니다.</p>
        <button onClick={handleClick}>홈으로 이동</button>
        </>
    );
}