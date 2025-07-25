import type { ObjectSchema } from "yup";
import yup from "./yup.kr";
import { useState, type JSX } from "react";
import {
    useForm,
    type SubmitErrorHandler,
    type SubmitHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const scheme = yup.object({
    name: yup.string().label("이름").required().max(20),
    gender: yup.string().label("성별").required(),
    email: yup.string().label("이메일").required().email(),
    memo: yup.string().label("비고").required().min(10),
});

export function FormKorean(): JSX.Element {
    const defaultValues = {
        name: "홍길동",
        gender: "male",
        email: "example@example.com",
        memo: "",
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues,
        resolver: yupResolver(scheme),
    });

    const onsubmit: SubmitHandler<typeof defaultValues> = (data) =>
        console.log(data);
    const onerror: SubmitErrorHandler<typeof defaultValues> = (err) =>
        console.log(err);

    return (
        <form
            action="#"
            method="post"
            onSubmit={handleSubmit(onsubmit, onerror)}
            noValidate
        >
            <div>
                <label htmlFor="name">이름: </label>
                <input type="text" id="name" {...register("name")} />
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="gender">성별: </label>
                <select id="gender" {...register("gender")}>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                    <option value="other">기타</option>
                </select>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">이메일: </label>
                <input type="email" id="email" {...register("email")} />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">비고: </label>
                <textarea id="memo" {...register("memo")} />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">제출</button>
                <button type="reset">초기화</button>
            </div>
        </form>
    );
}
