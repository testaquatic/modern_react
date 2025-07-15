import type { KeyboardEvent, ReactElement } from "react";

export function EventKey(): ReactElement {
  const handleKey = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'q') {
      alert("이름은 20자 이내로 입력해 주세요.");
    }
  }

  return (
    <form>
      <label htmlFor="name">이름 :
        <input type="text" name="name" id="name" size={20} onKeyDown={handleKey} />
      </label>
    </form>
  );
}