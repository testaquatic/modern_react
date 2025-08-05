import type { ReactElement } from "react";
import styled, { type DefaultTheme } from "styled-components";

interface StyledPropsTheme extends DefaultTheme {
    theme: { radius: boolean; color: string };
}

const MyPanel = styled.div<StyledPropsTheme>`
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    color: white;
    border-radius: ${(props: { theme: { radius: boolean } }) =>
        props.theme.radius ? "10px" : "0"};
    background-color: ${(props) => props.theme.color};
`;

export function StyledProps(): ReactElement {
    return (
        <MyPanel
            theme={{
                radius: true,
                color: "royalblue",
            }}
        >
            <b>Styled JSX</b>는 JSX 표현식에 스타일 정의를 삽입하는 형식의
            라이브러리입니다.
        </MyPanel>
    );
}
