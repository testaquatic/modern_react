import styled from "@emotion/styled";

const MyPanel = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
`;

export function EmotionComp() {
    return (
        <MyPanel><b>Styled JSX</b>는 JSX 표현식에 스타일 정의를 삽입하는 형식의 라이브러리입니다.</MyPanel>
    );
}