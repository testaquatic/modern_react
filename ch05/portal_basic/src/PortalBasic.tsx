import { useState } from "react";
import { createPortal } from "react-dom";
import "./PortalBasic.css";

export default function PortalBasic() {
    const [show, setShow] = useState(false);
    const handleDialog = () => setShow((s) => !s);
    const dialogElement = document.getElementById("dialog");

    return (
        <form action="#" method="post">
            <button type="button" onClick={handleDialog} disabled={show}>
                다이얼로그 표시
            </button>
            {show &&
                dialogElement &&
                createPortal(
                    <div className="dialog">
                        <p>Portal에서 생성된 대화상자</p>
                        <button type="button" onClick={handleDialog}>
                            닫기
                        </button>
                    </div>,
                    dialogElement,
                )}
        </form>
    );
}
