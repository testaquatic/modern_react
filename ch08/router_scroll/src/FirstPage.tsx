import { Link } from "react-router-dom";

export default function FirstPage() {
    return (
        <>
            <h2>FirstPage</h2>
            <hr />
            <p style={{ height: 800 }}></p>
            <p>
                <Link to="/second" preventScrollReset>
                    두 번째 페이지로 이동
                </Link>
            </p>
        </>
    );
}
