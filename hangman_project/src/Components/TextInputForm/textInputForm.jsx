import GetButton from "../Buttons/getButton";
import TextInput from "../TextInput/textInput";


function TextInputForm({handleOnSubmit, InputType='text', handleTextInputChange, value, setInputType}) {
      

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
                <div className="flex cursor-pointer">
                    <GetButton
                        text={InputType==="Password"?'Show':'Hide'}
                        onClick={()=>setInputType(InputType==='Password'?'text':'Password')}
                        type="button"
                    />
                </div>
                <div className="flex cursor-pointer">
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