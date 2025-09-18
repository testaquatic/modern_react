import { useState } from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";

export default function RouterParam() {
    const [count, setCount] = useState(0);
    const navigation = useNavigation();

    return (
        <>
            <p>접속자 수:{count}</p>
            <ul>
                <li>
                    <NavLink to="/">홈</NavLink>
                </li>
                <li>
                    <NavLink to="/book/form">도서 등록 양식</NavLink>
                </li>
                <li>
                    <NavLink to="/books">도서 목록</NavLink>
                </li>
                <li>
                    <NavLink to="/book/979-1-1583-9517-9">
                        시작하세요! C# 12 프로그래밍
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/book/979-1-1583-9518-6">
                        OpenAI API와 파이썬으로 나만의 챗GPT 만들기
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/book/" end>
                        기본 도서
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search/react/router/remix">검색 결과</NavLink>
                </li>
                <li>
                    <NavLink to="/horde/is/nothing">
                        존재하지 않는 페이지
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bookQuery?isbn=979-1-1583-9512-4">
                        게임 개발을 위한 미드저니, 스테이블 디퓨전 완벽
                        활용법(쿼리 버전)
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bookState" state="979-1-1583-9511-7">
                        디자인을 위한 미드저니 완벽 활용법(State 버전)
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/weather/Seoul">서울 날씨</NavLink>
                </li>
            </ul>
            <hr />
            {navigation.state === "loading" ? (
                <p>Loading...</p>
            ) : (
                <Outlet context={[count, setCount]} />
            )}
        </>
    );
}
