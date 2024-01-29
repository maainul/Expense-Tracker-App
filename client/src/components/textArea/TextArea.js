import React from 'react'

const TextArea = ({ label, fieldName, rows, columns, labelTitle }) => {
    return (
        <div className='formgroup'>
            {label && <label htmlFor={fieldName}>{labelTitle}</label>}
            <textarea
                name="content"
                rows={4}
                cols={40}
            />
        </div>
    )
}

export default TextArea