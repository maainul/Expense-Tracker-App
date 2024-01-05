import React from 'react'

const ButtonPrimary = ({ clsName, title }) => {
    return (
        <button className='btn btn-primary'>

            <i className={clsName}></i>
            <span>{title}</span>
        </button>
    )
}

export default ButtonPrimary
