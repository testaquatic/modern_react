import { NavLink, Outlet } from "react-router-dom";
import "./RouterApp.css";

const isCurrent = ({ isActive }: { isActive: boolean }) => (isActive ? {
    color: "red",
    fontWeight: "bold",
} : {});

export default function RouterApp() {
    return (
        <>
        <ul>
            <li><NavLink style={isCurrent} to="/">홈</NavLink></li>
            <li><NavLink style={isCurrent} to="/article" end>기사</NavLink></li>
            <li><NavLink style={isCurrent} to="/about" replace>회사 소개</NavLink></li>
            <li><NavLink style={isCurrent} to="/article/info">정보</NavLink></li>
        </ul>
        <hr />
        <Outlet />
        </>
    );
}