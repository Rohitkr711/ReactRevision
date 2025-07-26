import GetButton from "../Buttons/getButton";
import TextInput from "../TextInput/textInput";
import { Link } from "react-router";


function TextInputForm({ handleOnSubmit, InputType = 'text', handleTextInputChange, value, setInputType }) {


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
                        text={InputType === "Password" ? 'Show' : 'Hide'}
                        onClick={() => setInputType(InputType === 'Password' ? 'text' : 'Password')}
                        type="button"
                    />
                </div>
                <div className="flex cursor-pointer">
                        <GetButton
                            text="Ok"
                            type="Submit"
                        />
                    </div>

{/* Alternative of useNavigate's state prop. but, can't add validation */}
                {/* <Link to='/play' state={value}>
                    <div className="flex cursor-pointer">
                        <GetButton
                            text="Ok"
                            type="Submit"
                        />
                    </div>
                </Link> */}
            </form>
        </>
    )
}

export default TextInputForm;