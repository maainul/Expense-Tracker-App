import React from 'react'

const ButtonWithIcons = ({ clsName, title }) => {
    return (
        <button className='btn button-with-icon'>
            <i className={clsName}></i>
            <span>{title}</span>
        </button >
    )
}

export default ButtonWithIcons

