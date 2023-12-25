import React from 'react'
import '../SubmitBtn/SubmitBtn.css'


const SubmitBtn = ({ title }) => {
    return (
        <button type='submit'>
            {title}
        </button>
    )
}

export default SubmitBtn