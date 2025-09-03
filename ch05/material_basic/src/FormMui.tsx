import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function FormMui() {
    const defaultValues = {
        name: "홍길동",
        email: "admin@example.com",
        gender: "male",
        memo: "",
    };

    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues});
    const onsubmit = (data: unknown) => console.log(data);
    const onerror = (error: unknown) => console.log(error);

    return (
        <form action="#" onSubmit={handleSubmit(onsubmit, onerror)}>
            <div>
                <TextField label="이름" margin="normal" {...register("name", {
                    required: "이름은 필수 입력 항목입니다.",
                    maxLength: {
                        value: 20,
                        message: "이름은 20자 이내로 작성해 주세요."
                    }
                })} error={"name" in errors} helperText={errors.name?.message}/>
            </div>
            <div>
                <FormControl>
                    <FormLabel component="legend">성별:</FormLabel>
                    <RadioGroup name="gender">
                        <FormControlLabel value="male" control={<Radio />} label="남성" {...register(
                            "gender",
                            {required: "성별은 필수입니다."})}/>
                        <FormControlLabel value="female" control={<Radio />} label="여성" {...register(
                            "gender",
                            {required: "성별은 필수입니다."})}/>
                    </RadioGroup>
                    <FormHelperText error={"gender" in errors}>{errors.gender?.message}</FormHelperText>
                </FormControl>
            </div>
            <div>
                <TextField type="email" label="이메일 주소" margin="normal" {...register("email", {
                    required: "이메일 주소는 필수 입력 항목입니다.",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "이메일 주소 형식이 잘못됐습니다.."
                }})} error={"email" in errors} helperText={errors.email?.message}/>
            </div>
            <div>
                <TextField label="비고" margin="normal" multiline {...register("memo", {
                    required: "비고는 필수 입력항목입니다.",
                    minLength: {
                        value: 10,
                        message: "비고는 10자 이상으로 작성해 주세요."
                    }
                })} error={"memo" in errors} helperText={errors.memo?.message} />
            </div>
            <div>
                <Button variant="contained" type="submit">제출하기</Button>
            </div>
        </form>
    )
}