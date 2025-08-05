import styled from "styled-components";
import { PanelBase } from "./StyledCommon.css";

export const MyPanel = styled.div`
    ${PanelBase}
    width: 300px;
    background-color: red;
    color: white;
`;

export function StyledCommon() {
    return (
        <MyPanel>
            빨간색 가로 300px 크기의 패널입니다.빨간색 가로 300px 크기의
            패널입니다.빨간색 가로 300px 크기의 패널입니다.빨간색 가로 300px
            크기의 패널입니다.빨간색 가로 300px 크기의 패널입니다.빨간색 가로
            300px 크기의 패널입니다.빨간색 가로 300px 크기의 패널입니다.빨간색
            가로 300px 크기의 패널입니다.빨간색 가로 300px 크기의 패널입니다.
        </MyPanel>
    );
}
