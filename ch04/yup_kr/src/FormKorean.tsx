import { yupResolver } from "@hookform/resolvers/yup";
import yup from "./yup_kr";
import { useForm } from "react-hook-form";

const scheme = yup.object({
    name: yup
        .string()
        .label("이름")
        .required(),
    gender: yup
        .string()
        .label("성별")
        .required(),
    email: yup
        .string()
        .label("이메일 주소")
        .required()
        .email(),
    memo: yup
        .string()
        .label("메모")
        .required()
        .min(10),
});

export function FormKorean() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "홍길동",
            email: "admin@example.com",
            gender: "male",
            memo: "",
        },
        resolver: yupResolver(scheme),
    });

    return (
        <form onSubmit={handleSubmit((data) => console.log(data), (error) => console.log(error))} noValidate>
            <div>
                <label htmlFor="name">이름</label><br />
                <input type="text" id="name" {...register("name")} />
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="gender">성별</label><br />
                <label htmlFor="">
                    <input type="radio" value="male" {...register("gender")} />남성
                </label>
                <label htmlFor="">
                    <input type="radio" value="female" {...register("gender")} />여성
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">이메일 주소</label><br />
                <input type="email" id="email" {...register("email")} />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">메모</label><br />
                <textarea id="memo" {...register("memo")} />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">제출</button>
            </div>
        </form>
    );
}