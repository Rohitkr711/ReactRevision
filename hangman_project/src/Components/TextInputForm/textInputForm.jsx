import GetButton from "../Buttons/getButton";
import TextInput from "../TextInput/textInput";
import { Link } from "react-router";


function TextInputForm({ handleOnSubmit, InputType = 'text', handleTextInputChange, value, setInputType }) {


    return (
        <>
        <div className="flex w-full">

            <form className="flex flex-col gap-8 justify-center items-center w-full" onSubmit={handleOnSubmit}>
                <div className="flex w-full ">
                    <div className="w-full">
                        <TextInput
                            InputType={InputType}
                            onChange={handleTextInputChange}
                            label="Enter a word : Max length-8"
                            value={value}
                        />
                    </div>

                    <div className="cursor-pointer">
                        <GetButton
                            text={InputType === "Password" ? 'Show' : 'Hide'}
                            onClick={() => setInputType(InputType === 'Password' ? 'text' : 'Password')}
                            type="button"
                            />
                    </div>
                </div>

                <div className="flex cursor-pointer rounded-md">
                    <GetButton
                        text="Next"
                        type="Submit"
                        btnStyleType="Secondary"
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
        </div>
        </>
    )
}

export default TextInputForm;