import React from 'react'

const Header = () => {

    // Function to get Value for Deposited Amount
    const DepositValue = () => {
        const depositedAmount = document.getElementById("value").value;
    }

    return (
        <nav className="navbar navbar-light bg-light mb-5">
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
