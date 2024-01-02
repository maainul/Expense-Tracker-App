

import React from 'react'
import '../Buttons/Submit.css'


const Submit = ({ title }) => {
    return (
        <button type='submit' className='butn'>
            {title}
        </button>
    )
}

export default Submit