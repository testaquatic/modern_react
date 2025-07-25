import { yupResolver } from "@hookform/resolvers/yup";
import type { ReactElement } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import * as yup from "yup";

yup.addMethod(yup.string, "ng", function () {
    return this.test(
        "ng",
        ({ label }) => `${label}에 적절하지 않은 단어가 포함되어 있습니다.`,
        (value) => {
            const ngs = ["폭력", "죽음", "그로테스크"];
            for (const ng of ngs) {
                if (value?.includes(ng)) {
                    return false;
                }
            }
            return true;
        },
    );
});

declare module "yup" {
    interface StringSchema {
        ng(value?: string): this;
    }
}

const scheme = yup.object({
    name: yup
        .string()
        .label("이름")
        .required("${label}은 필수 입력입니다.")
        .max(20, "${label}은 ${max}자 이내로 입력하세요.")
        .trim()
        .lowercase(),
    gender: yup
        .string()
        .label("성별")
        .required("${label}은 필수 입력입니다.")
        .oneOf(
            ["male", "female", "other"],
            "${label}은 ${values} 중 하나여야 합니다.",
        ),
    email: yup
        .string()
        .label("이메일 주소")
        .required("${label}는 필수 입력입니다.")
        .email("${label}의 형식이 잘못되었습니다."),
    memo: yup
        .string()
        .label("비고")
        .required("${label}는 필수 입력입니다.")
        .min(10, "${label}는 ${min}자 이상으로 입력하세요.")
        .ng(),
});

type FormYupForm = yup.InferType<typeof scheme>;

export function FormYup(): ReactElement {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormYupForm>({
        defaultValues: {
            name: "홍길동",
            email: "admin@example.com",
            gender: "male",
            memo: "",
        },
        resolver: yupResolver(scheme),
    });

    const onsubmit = (data: FormYupForm) => console.log(data);
    const onerror = (err: FieldErrors<FormYupForm>) => console.log(err);

    return (
        <form
            action="#"
            method="post"
            onSubmit={handleSubmit(onsubmit, onerror)}
            noValidate
        >
            f
            <div>
                <label htmlFor="name">이름: </label>
                <br />
                <input type="text" id="name" {...register("name")} />
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="gender">성별:</label>
                <br />
                <input
                    type="radio"
                    id="male"
                    {...register("gender")}
                    value="male"
                />
                <label htmlFor="male">남성</label>
                <input
                    type="radio"
                    id="female"
                    {...register("gender")}
                    value="female"
                />
                <label htmlFor="female">여성</label>
                <input
                    type="radio"
                    id="other"
                    {...register("gender")}
                    value="other"
                />
                <label htmlFor="other">기타</label>
                <input
                    type="radio"
                    id="오류 발생"
                    {...register("gender")}
                    value="오류 발생"
                />
                <label htmlFor="오류 발생">오류 발생</label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">이메일 주소:</label>
                <br />
                <input type="email" id="email" {...register("email")} />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">비고:</label>
                <br />
                <textarea id="memo" {...register("memo")} />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">제출하기</button>
            </div>
        </form>
    );
}
