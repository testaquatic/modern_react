import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";


yup.addMethod(yup.string, "ng", function() {
    return this.test(
        "ng",
        ({label}) => `${label}에 적절하지 않은 단어가 포함되어 있습니다.`,
        (value) => {
            const ngs = ["폭력", "죽음", "그로테스크"];
            for (const ng of ngs) {
                if (value?.includes(ng)) {
                    return false;
                }
            }
            return true;
        }
    );
});


declare module "yup" {
    interface StringSchema {
        ng(): StringSchema;
    }
}


const scheme = yup.object({
    name: yup.string().label("이름").trim().lowercase().required("${label}은 필수 입력입니다.").max(20, "${label}은 ${max}자 이내로 입력하세요."),
    gender: yup.string().label("성별").required("${label}은 필수 입력입니다."),
    email: yup.string().label("이메일 주소").required("${label}은 필수 입력입니다.").email("${label} 형식이 잘못되었습니다."),
    memo: yup.string()
        .label("비고")
        .required("${label}은 필수 입력입니다.")
        .min(10, "${label}은 ${min}자 이상 입력하세요.").ng(),
});

export function FormYup() {
    const yupForm = useForm({defaultValues: {
        name: "홍길동",
        email: "admin@example.com",
        gender: "male",
        memo: "",
    }, resolver: yupResolver(scheme)});


    const onsubmit = (data: unknown) => console.log(data);
    const onerror = (error: unknown) => console.log(error);

    return (
        <form onSubmit={yupForm.handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <div>
                    <label htmlFor="name">이름:</label>
                </div>
                <div>
                    <input type="text" id="name" {
                        ...yupForm.register("name")
                    } />
                </div>
                <div>{yupForm.formState.errors.name?.message}</div>
            </div>
            <div>
                <div>
                    <label htmlFor="gender">성별:</label>
                </div>
                <div>
                    <input type="radio" value="male" {
                        ...yupForm.register("gender")
                    }/> 남성
                    <input type="radio" value="female" {
                        ...yupForm.register("gender")
                    }/> 여성
                </div>
                <div>{yupForm.formState.errors.gender?.message}</div>
            </div>
            <div>
                <div>
                    <label htmlFor="email">이메일 주소:</label>
                </div>
                <div>
                    <input type="email" id="email" {
                        ...yupForm.register("email")
                    } />
                </div>
                <div>{yupForm.formState.errors.email?.message}</div>
            </div>
            <div>
                <div>
                    <label htmlFor="memo">비고:</label>
                </div>
                <div>
                    <textarea id="memo" {
                        ...yupForm.register("memo")
                    } />
                </div>
                <div>{yupForm.formState.errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">제출하기</button>
            </div>
        </form>
    );
    
}