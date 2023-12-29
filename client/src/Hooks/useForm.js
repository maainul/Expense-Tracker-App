import { useState } from 'react';
import axios from 'axios';

const useForm = ({ onSubmitURL }) => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    // Handle Change of Form Data
    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value });
    };

    // Save Data 
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);
            const result = await axios.post(onSubmitURL, { ...formData });
            console.log(`Data added Successfully ${result.data}`);
            setFormData({});
        } catch (error) {
            console.log(`Invalid Request : ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return { formData, loading, handleChange, handleSubmit };
};

export default useForm;
