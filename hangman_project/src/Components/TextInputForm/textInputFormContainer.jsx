import { useState } from 'react';
import TextInputForm from "./textInputForm";

function TextInputFormContainer({ onSubmit }) {

    const [value, setValue] = useState("");
    const [InputType, setInputType] = useState("Password");

    function handleOnSubmit(event) {
        event.preventDefault();
        console.log("Form submitted with value", value);
        onSubmit?.(value);

    }
    function handleTextInputChange(event) {
        console.log("handleTextInputChange function called");
        setValue(event.target.value);
        console.log(event.target.value);

    }

    return (
        <>
            <TextInputForm
                handleOnSubmit={handleOnSubmit}
                InputType={InputType}
                setInputType={setInputType}
                handleTextInputChange={handleTextInputChange}
                value={value}
            />
        </>
    )

}

export default TextInputFormContainer;
