import React from 'react'

const SelectBox = () => {
    return (

        <div className='selectbox'>
            <select name="cars" id="cars" className='select'>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>

        </div>
    )
}

export default SelectBox
