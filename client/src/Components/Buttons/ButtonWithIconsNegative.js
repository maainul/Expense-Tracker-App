import React from 'react'

const ButtonWithIconsNegative = ({ clsName, title }) => {
    return (
        <button className='btn btn-negative'>
            <i className={clsName}></i>
            <span>{title}</span>
        </button >
    )
}

export default ButtonWithIconsNegative

