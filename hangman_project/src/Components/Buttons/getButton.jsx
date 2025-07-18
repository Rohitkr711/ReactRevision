import CustomButtonStyle from "./customButtonStyle";

function GetButton({ text, type='button', onClick }) {
    return (
        <>
            <button className={`border rounded-sm px-2  ${CustomButtonStyle(type)}`}
            onClick={onClick}
            >
                {text}
            </button>
        </>
    )
}

export default GetButton;