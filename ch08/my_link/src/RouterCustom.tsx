import { MyLink } from "./MyLink";

export default function RouterCustom() {
    return (
        <>
            <ul>
                <li>
                    <MyLink to="/">홈</MyLink>
                </li>
                <li>
                    <MyLink to="/article">기사</MyLink>
                </li>
                <li>
                    <MyLink to="/about">회사 소개</MyLink>
                </li>
            </ul>
        </>
    );
}
