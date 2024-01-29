import React from 'react'

const ButtonPrimary = ({ clsName, title, url,onClick }) => {
    return (
        <button className='btn btn-primary' onClick={onClick} >
            <i className={clsName}></i>
            <span>{title}</span>
        </button>
    )
}

export default ButtonPrimary
