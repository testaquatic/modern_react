import { NavLink, Outlet } from "react-router-dom";

export default function RouterParam() {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/search/react/router/remix">검색 결과</NavLink>
                </li>

            </ul>
            <hr />
            <Outlet />
        </>
    );
}
