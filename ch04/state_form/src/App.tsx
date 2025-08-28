import { FormCheck } from "./FormCheck";
import { FormCheckMulti } from "./FormCheckMulti";
import { FormFile } from "./FormFile";
import { FormList } from "./FormList";
import { FormRadio } from "./FormRadio";
import { FormSelect } from "./FormSelect";
import { FormTextArea } from "./FormTextarea";
import { StateForm } from "./StateForm";
import { StateFormUC } from "./StateFormUC";
import { StateNest } from "./StateNest";

function App() {
  return (
    <>
    <StateForm />
    <StateFormUC />
    <FormTextArea />
    <FormSelect />
    <FormList />
    <FormRadio />
    <FormCheck />
    <FormCheckMulti />
    <FormFile />
    <StateNest />
    </>
  );
}

export default App
