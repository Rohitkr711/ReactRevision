import CustomButtonStyle from "./customButtonStyle";

function GetButton({ text, type }) {
    return (
        <>
            <button className={`border p-2 rounded-sm mr-2 ${CustomButtonStyle(type)}`}>
                {text}
            </button>
        </>
    )
}

export default GetButton;