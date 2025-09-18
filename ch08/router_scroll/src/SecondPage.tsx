import { Link } from "react-router-dom";

export default function SecondPage() {
    return (
        <>
            <h2>FirstPage</h2>
            <hr />
            <p style={{ height: 800 }}></p>
            <p>
                <Link to="/">첫 번째 페이지로 이동</Link>
            </p>
        </>
    );
}
