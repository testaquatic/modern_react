import type { ReactElement } from "react";
import styled from "styled-components";

export function StyledComp(): ReactElement {
    return (
        <StyledDiv>
            Styled JSX는 JSX표현식에 스타일 정의를 삽입하는 형식의
            라이브러리입니다.
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    background-color: blue;
    color: white;
    border-radius: 5px;
    width: 200px;
    padding: 10px;
    font-size: 16px;
`;
