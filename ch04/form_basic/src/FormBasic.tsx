import { useForm, type FieldErrors} from "react-hook-form";

type Values = {
    name: string;
    email: string;
    gender: string;
    memo: string;
};

export function FormBasic() {
    const defaultValues = {
        name: "홍길동",
        email: "admin@example.com",
        gender: "male",
        memo: ""
    };

    const { register, handleSubmit, formState: { errors, isDirty, isValid, isSubmitting} } = useForm({ defaultValues });

    const onsubmit = (data: Values) => {
        return new Promise<void>((resolve) => setTimeout(() => {
            resolve();
            console.log(data);
        }, 4000));
    };
    const onerror = (err: FieldErrors<Values>) => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <div>
                    <label htmlFor="name">이름</label><br />
                <input type="text" id="name" {
                    ...register("name", {
                        required: "이름은 필수 입력 항목입니다.",
                        maxLength: {
                            value: 20,
                            message: "이름은 최대 20자까지 입력 가능합니다.",
                        }
                    })
                } />
            </div>
            <div>{errors.name?.message}</div>
            <div>
                <label htmlFor="gender">성별</label><br />
                <label>
                        <input type="radio" value="male" {...register("gender", {
                        required: "성별은 필수 입력 항목입니다."
                    })} />남성
                </label>
                <label>
                    <input type="radio" value="female" {...register("gender", {
                        required: "성별은 필수 입력 항목입니다."
                    })} /> 여성
                </label>
            </div>
            <div>{errors.gender?.message}</div>
            <div>
                <label htmlFor="email">이메일 주소</label><br />
                <input type="email" id="email" {...register("email", {
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "이메일 주소가 올바르지 않습니다."
                    },
                })} />
            </div>
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">메모</label><br />
                <textarea id="memo" {...register("memo", {
                    required: "메모는 필수 입력 항목입니다.",
                    minLength: {
                        value: 10,
                        message: "메모는 10자 이상으로 작성해주세요.",
                    },
                    validate: {
                        ng: (value) => {
                            const ngs = ["폭력", "죽음", "그로테스크"];
                            for (const ng of ngs) {
                                if (value.includes(ng)) {
                                    return "메모에 적절하지 않은 단어가 포함되어 있습니다.";
                                }
                            }
                            return true;
                        }
                    }
                })} />
                <div>{ errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit" disabled={!(isDirty && isValid) || isSubmitting}>제출</button>
                {isSubmitting && <div>제출중</div>}
            </div>
        </form>
    )
}