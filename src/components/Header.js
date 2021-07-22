import React from 'react'

const Header = () => {

    const DepositValue = () => {
        const amount = document.getElementById("value").value;
        prompt(`Today's Savings are Rs. ${amount}`);
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">My Wallet</a>
                <div className="d-flex">
                <input id="value" className="form-control me-2" type="search" placeholder="Today's Savings..." aria-label="Search" />
                <button onClick={DepositValue} className="btn btn-outline-success">Deposit</button>
                </div>
            </div>
        </nav>
    )
}

export default Header
