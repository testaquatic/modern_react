import { Form, useActionData } from "react-router-dom";

export default function BookFormPage() {
    const errors = useActionData();

    return (
        <Form method="post" noValidate>
            <ul>
                {errors?.map((msg: string) => (
                    <li key={msg}>{msg}</li>
                ))}
            </ul>
            <div>
                <label htmlFor="title">제목:</label>
                <input type="text" id="title" name="title" size={20} />
            </div>
            <div>
                <label htmlFor="price">가격:</label>
                <input type="number" id="price" name="price" />원
            </div>
            <div>
                <label htmlFor="published">출간일:</label>
                <input type="date" id="published" name="published" />
            </div>
            <div>
                <button type="submit">등록하기</button>
            </div>
        </Form>
    );
}
