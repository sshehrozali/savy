// React Button Component
import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onClick} className="btn btn-outline-success">Deposit</button>
    )
}

export default Button
