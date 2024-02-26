import React from 'react'

const CheckBox = ({ title, isChecked, onChange }) => {
    return (
        <>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            <label>{title}</label>
        </>
    )
}

export default CheckBox
