import React from 'react'

const ResetAndCancelBtn = ({ clsName, title }) => {
    return (
        <button className='btn btn-reset-cancel'>

            <i className={clsName}></i>
            <span>{title}</span>
        </button>
    )
}

export default ResetAndCancelBtn