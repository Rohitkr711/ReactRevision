import { useState } from 'react';
import GetButton from "../Buttons/getButton";
import TextInput from "../TextInput/textInput";


function TextInputForm({onSubmit}) {
    const [value, setValue] = useState("");
    const [InputType, setInputType]=useState("Password");

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
    function onClickHandler(){
        setInputType(InputType==='Password'?'text':'Password')
    }

    return (
        <>
            <form className="flex border" onSubmit={handleOnSubmit}>
                <div className="mr-2 flex-1">
                    <TextInput
                        InputType={InputType}
                        onChange={handleTextInputChange}
                        label="Enter a word or phrase"
                        value={value}
                    />
                </div>
                <div className="flex">
                    <GetButton
                        text={InputType==="Password"?'Show':'Hide'}
                        onClick={onClickHandler}
                        type="toggle"
                    />
                </div>
                <div className="flex">
                    <GetButton
                        text="Ok"
                        type="Submit"
                    />
                </div>
            </form>
        </>
    )
}

export default TextInputForm;