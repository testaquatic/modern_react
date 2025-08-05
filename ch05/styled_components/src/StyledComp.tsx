import type { ReactElement } from "react";
import styled from "styled-components";

const MyPanel = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
`;

export function StyledComp(): ReactElement {
    return (
        <MyPanel>
            <b>Styled JSX</b>는 JSX 표현식에서 스타일 정의를 삽입하는 형식의 라이브러리입니다.
        </MyPanel>
    );
}
