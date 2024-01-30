import React from 'react';

const Select = ({
    state,
    fieldName,
    iterableItems,
    setState,
    errorState,
    label,
    labelTitle,
}) => {
    // handleChange
    const handleChange = (e) => {
        const { value } = e.target;
        setState(value);
    };

    console.log("########### Iterable item #####################")
    console.log(iterableItems)
    console.log("############ Iterable item ####################")

    return (
        <div className="formgroup">
            {label && <label htmlFor={fieldName}>{labelTitle}</label>}
            <div class="custom-select">
                <select value={state} onChange={handleChange}>
                    <option value="">Select One Option</option>
                    {iterableItems.map((ie) => (
                        <option key={ie.id} value={ie._id}>{ie.name}</option>
                    ))}
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

/*
            <label htmlFor="expenseType">Expense Type:</label><br />
            <select id="expenseType" value={expenseType} onChange={handleChange}>
                <option value="">-----</option>
                {expenseTypeList.map((exp) => (
                    <option key={exp.id} value={exp._id}>{exp.name}</option>
                ))}

*/