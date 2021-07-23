// React Header Component
import React from 'react'
import Button from './Button'

const Header = (props) => {
    return (
        <nav className="navbar navbar-light bg-light mb-5">
            <div className="container-fluid">
                <a className="navbar-brand">My Wallet</a>
                <div className="d-flex">
                <input id="amount" className="form-control me-2" type="search" placeholder="Today's Savings..." aria-label="Search" />
                <Button onClick={props.onClick}/>
                </div>
            </div>
        </nav>
    )
}

export default Header
