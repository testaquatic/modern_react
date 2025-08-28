import { useForm } from "react-hook-form";

export function FormBasic() {
    const defaultValues = {
        name: "홍길동",
        email: "admin@example.com",
        gender: "male",
        memo: "",
    };

    const form = useForm({defaultValues});

    const onsubmit = (data: unknown) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
                console.log(data);
            }, 4000);
        })};

    const onerror = (error: unknown) => console.log(error);

    return (
        <form onSubmit={form.handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <label htmlFor="name">이름:</label>
                <input type="text" id="name" 
                    {
                        ...form.register("name", {
                            required: "이름은 필수 입력 항목입니다.",
                            maxLength: {
                                value: 20,
                                message: "이름은 20자 이내로 작성해주세요."
                            }
                        })
                    }
                />
                <div>{form.formState.errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="gender">성별:</label>
                <input type="radio" value="male" {
                    ...form.register("gender", {
                        required: "성별은 필수입니다."
                    })
                }/> 남성
                <input type="radio" value="female" {
                    ...form.register("gender", {
                        required: "성별은 필수입니다."
                    })
                }/> 여성
                <div>{form.formState.errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">이메일 주소:</label>
                <input type="email" id="email" {
                    ...form.register("email", {
                        required: "이메일 주소는 필수 입력사항입니다.",
                        pattern: {
                            value: /^([A-Z0-9._%+-]+)@([A-Z0-9.-]+\.[A-Z]{2,})$/i,
                            message: "이메일 주소 형식이 잘못되었습니다."
                        }
                })} />
                <div>{form.formState.errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">메모:</label>
                <textarea id="memo" {
                    ...form.register("memo", {
                        required: "비고는 필수 입력 항목입니다.",
                        minLength: {
                            value: 10,
                            message: "비고는 10자 이상 입력해주세요."
                        },
                        validate: {
                            ng: (value) => {
                                const ngs = ["폭력", "죽음", "그로테스크"];
                                for (const ng of ngs) {
                                    if (value.includes(ng)) {
                                        return "비고에 적절하지 않은 단어가 포함되어 있습니다.";
                                    }
                                }
                                return true;
                            }
                        }
                    })} />
                <div>{form.formState.errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit" disabled={!form.formState.isDirty || !form.formState.isValid || form.formState.isSubmitting}>제출하기</button>
                {form.formState.isSubmitting && <div>제출 중...</div>}
            </div>
        </form>
    )
}