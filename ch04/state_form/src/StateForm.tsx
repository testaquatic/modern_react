import { useState, type ChangeEvent, type ReactElement } from "react";

export function StateForm(): ReactElement {
  const [form, setForm] = useState({
    name: "홍길동",
    age: 18
  });

  const handleForm = (e: ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }
    const { name, value } = e.target;
    if (!(name in form)) {
      return;
    }

    setForm((form) => {return{
      ...form,
      [name]: value
    }});
  }

  const show = () => console.log(`안녕하세요, ${form.name} (${form.age}세) 님!`);

  return (
    <form action="#" method="post">
      <div>
        <label htmlFor="name">이름: </label>
        <input type="text" name="name" id="name" onChange={handleForm} value={form.name} placeholder="이름을 입력하세요" />
      </div>
      <div>
        <label htmlFor="age">나이: </label>
        <input type="number" name="age" id="age" onChange={handleForm} value={form.age} placeholder="나이를 입력하세요"/>
      </div>
      <div>
        <button type="button" onClick={show}>보내기</button>
      </div>
      <p>안녕하세요, {form.name} ({form.age}세) 님!</p>
    </form>
  );
}