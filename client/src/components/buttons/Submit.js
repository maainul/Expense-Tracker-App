

import React from 'react'
import '../buttons/Submit.css'


const Submit = ({ title }) => {
    return (
        <button type='submit' className='butn'>
            {title}
        </button>
    )
}

export default Submit