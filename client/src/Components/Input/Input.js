import React from 'react';

const Input = ({
    type,
    fieldName,
    placeholder,
    state,
    setState,
    errorState,
    label,
    labelTitle,
    maxlength
}) => {
    // handleChange
    const handleChange = (e) => {
        const { value } = e.target;
        setState(value);
    };

    return (
        <div className="formgroup">
            {label && <label htmlFor={fieldName}>{labelTitle}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={state}
                id={fieldName}
                onChange={handleChange}
                {...(maxlength && { maxLength: maxlength })}
            />
            {errorState &&
                errorState
                    .filter((error) => error.field === fieldName)
                    .map((filteredError) => (
                        <div key={filteredError.error} style={{ color: 'red' }}>
                            {filteredError.error}
                        </div>
                    ))}
        </div>
    );
};

export default Input;
