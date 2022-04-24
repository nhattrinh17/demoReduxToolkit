function Input( props ) {
    const {label, name, data, setData, inputType} = props
    return (
        <>
            <label htmlFor="">{label}</label>
            {inputType === "textarea"? 
                (<textarea name={name} placeholder={data} type="text"
                    rows="6" cols="10"
                    onChange={e => setData(e.target.value)}
                />): 
                (<input type="text" name={name} id="" 
                    placeholder={data}
                    onChange={(e) => setData(e.target.value)}
                />)
            }
        </>
    )
}

export default Input