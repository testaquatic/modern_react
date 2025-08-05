/// <reference types="@emotion/react/types/css-prop" />

import { css } from "@emotion/react";
import type { ReactElement } from "react";

export function EmotionTsx(): ReactElement {
    const styles = css({
        width: 300,
        padding: 10,
        border: "1px solid #000",
        borderRadius: 5,
        backgroundColor: "royalblue",
        color: "white",
    });

    return (
        <div css={styles}>
            <b>Styled JSX</b>는 JSX 표현식에 스타일 정의를 삽입하는 형식의
            라이브러리입니다.
        </div>
    );
}
