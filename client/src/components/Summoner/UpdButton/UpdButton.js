import React from 'react'
import './UpdButton.css'


export const UpdButton = ({
    children,
    type,
    onClick,
    disabled,
}) => {
    return (
        <button className="UpdButton" onClick={onClick} disabled={disabled} type={type}>{children}</button>
    )
}
