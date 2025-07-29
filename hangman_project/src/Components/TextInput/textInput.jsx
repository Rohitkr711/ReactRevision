function TextInput({ InputType = "text", InputValue, onChange, label}) {

    return (
        <>
            <label>
                {/* {label && <span>{label}</span>} */}
                <input
                className="px-4 py-2 rounded-l-sm w-full text-black border-0 outline-0"
                    type={InputType}
                    value={InputValue}
                    onChange={onChange}
                    placeholder={label}
                />
            </label>
        </>
    )
}

export default TextInput;