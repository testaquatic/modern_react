import { useForm } from "react-hook-form";
import yup from "./yup.kr";
import { yupResolver } from "@hookform/resolvers/yup";

const scheme = yup.object({
    name: yup.string().label("이름").trim().required().max(20),
    gender: yup.string().label("성별").required(),
    email: yup.string().label("이메일 주소").required().email(),
    memo: yup.string().label("비고").required().min(10),
});

export function FormKorean() {
    const yupForm = useForm({defaultValues: {
        name: "홍길동",
        email: "admin@example.com",
        gender: "male",
        memo: "",
    }, resolver: yupResolver(scheme)});

    return <form action="#" onSubmit={yupForm.handleSubmit((data) => console.log(data), (error) => console.log(error))} noValidate>
        <div>
            <label htmlFor="name">이름:</label>
            <input type="text" id="name" {
                ...yupForm.register("name")
            } />
            <div>{yupForm.formState.errors.name?.message}</div>
        </div>
        <div>
            <label htmlFor="gender">성별:</label>
            <input type="radio" value="male" {
                ...yupForm.register("gender")
            }/> 남성
            <input type="radio" value="female" {
                ...yupForm.register("gender")
            }/> 여성
            <div>{yupForm.formState.errors.gender?.message}</div>
        </div>
        <div>
            <label htmlFor="email">이메일 주소:</label>
            <input type="email" id="email" {
                ...yupForm.register("email")
            } />
            <div>{yupForm.formState.errors.email?.message}</div>
        </div>
        <div>
            <label htmlFor="memo">비고:</label>
            <textarea id="memo" {
                ...yupForm.register("memo")
            } />
            <div>{yupForm.formState.errors.memo?.message}</div>
        </div>
        <div>
            <button type="submit">제출하기</button>
        </div>
    </form>
}