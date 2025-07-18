function TextInput({ InputType = "text", InputValue, onChange, label}) {
    return (
        <>
            <label>
                {label && <span>{label}</span>}
                <input
                className="px-4 py-2 border border-gray-500 rounded-md w-full"
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