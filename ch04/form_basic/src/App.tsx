import { FormBasic } from "./FormBasic";
import { FormKorean } from "./FormKorean";
import { FormYup } from "./FormYup";
import { ProfilerBasic } from "./ProfilerBasic";

export default function App() {
  return (
    <>
      <FormBasic />
      <FormYup />
      <FormKorean />
      <ProfilerBasic />
    </>
  );
}
