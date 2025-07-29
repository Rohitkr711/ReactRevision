import CustomButtonStyle from "./customButtonStyle";

function GetButton({ text, type = 'button', onClick, btnStyleType }) {
    return (
        <>
            <button className={`h-full px-4 py-2 ${CustomButtonStyle(btnStyleType)}`}
                onClick={onClick}
                type={type}
            >
                {text}
            </button>
        </>
    )
}

export default GetButton;