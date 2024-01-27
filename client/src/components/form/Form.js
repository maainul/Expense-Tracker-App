// Form.js
import React from 'react';
import SubmitBtn from 'SubmitBtn/SubmitBtn';
import useForm from 'helper/customHooks/useForm';


const Form = ({ fields, onSubmitURL }) => {
    const { formData, handleChange, handleSubmit } = useForm({ onSubmitURL })

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <input
                    key={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    id={field.id}
                    value={formData[field.id] || ''}
                    onChange={handleChange}
                />
            ))}
            <SubmitBtn title={'Submit'} />
        </form>
    );
};

export default Form;

