import React from "react";
import ReactDOM from "react-dom";
import Savings from "./components/Savings";

function App() {
  // Store Current State value
  const [amount, setAmount] = React.useState("");
  // Store Deposited Amount value
  const [deposits, addDepositAmount] = React.useState([]);

  // When Enter key is pressed
  function EnterKey(event) {
    if (event.key == "Enter") {
      event.preventDefault();
      addAmount();
    };
  };
  // When Button is clicked
  function ButtonPress(event) {
    event.preventDefault();
    addAmount();
  }

  // When User clicks the 'Deposit' Button
  function addAmount(e) {
    // TODO
    console.log(amount);
  }

  return (
    <div className="mainAppWindow">
      {/* Header */}
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">My Wallet</a>
          <form class="d-flex">
            <input
              autoFocus
              class="form-control me-2"
              type="search"
              placeholder="Enter Amount Here"
              aria-label="Search"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onKeyPress={EnterKey}
              id="amount-field"
            />
            <button class="btn btn-outline-success" onClick={ButtonPress}>
              Deposit
            </button>
          </form>
        </div>
      </nav>

      <div className="container">
        <div class="card mt-5">
          <div class="card-body fs-3">Rs.300</div>
        </div>
      </div>
    </div>
  );
}

export default App;
