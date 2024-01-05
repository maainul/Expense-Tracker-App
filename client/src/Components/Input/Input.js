import React from 'react'

const Input = ({
    type,
    fieldName,
    placeholder,
    state,
    setState,
    errorState,
    label,
    labelTitle
}) => {

    // handle Change 
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(value)
    }

    return (
        <div className="formgroup">
            {label && <label htmlFor={fieldName} >{labelTitle}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={state}
                id={fieldName}
                onChange={handleChange}
            />
            {errorState.map((error) => error.field === fieldName && <div style={{ color: 'red' }} >{error.error}</div>)}
        </div>
    )
}

export default Input