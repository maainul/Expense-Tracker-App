import { useState } from 'react';
import axios from 'axios';

const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (url) => {
        try {
            setLoading(true);
            const result = await axios.post(url, { ...formData });
            console.log(`Register Successful ${result}`);
            setFormData({});
        } catch (error) {
            console.log(`Invalid Transaction : ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return { formData, loading, handleChange, handleSubmit };
};

export default useForm;
