import React from 'react';

const Select = ({
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
            <div class="custom-select">
                <select>
                    <option value="">Select One Option</option>
                    <option value="debit">Expense</option>
                    <option value="credit">Income</option>
                </select>
            </div>
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

export default Select;
