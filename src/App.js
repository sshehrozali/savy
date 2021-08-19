import React from "react";
import ReactDOM from "react-dom";
import Savings from "./components/Savings";

function App() {

  // Arrays for Days & Months
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // React States//
  // Store Current State value
  const [amount, setAmount] = React.useState("");
  // Store Deposited Amount value
  const [deposits, addDepositAmount] = React.useState([]);

  // EVENT HANDLERS //
  // When DOM is loaded
  document.addEventListener("DOMContentLoaded", function() {
    for (var i = 0; i < localStorage.length; i++) {
      console.log(i);
    };
  });
  // When Enter key is pressed
  function EnterKey(event) {
    if (event.key == "Enter") {
      event.preventDefault();
      addAmount();
    }
  }
  // When Button is clicked
  function ButtonPress(event) {
    event.preventDefault();
    addAmount();
  }

  // When User clicks the 'Deposit' Button
  const addAmount = (e) => {
    // TODO
    if (amount != "") {
      addDepositAmount([...deposits, amount]); // Store each deposited amount value inside state
      setAmount("");                           // Reset amount value to ""

      // Get Current Date
      const today = new Date();
      const DateTime = `${days[today.getDay() - 1]}, ${today.getDate()} ${months[today.getMonth() - 1]}`;

      // Add item to LocalStorage()
      localStorage.setItem(localStorage.length + 1, [amount, DateTime]);
    };
  };

  return (
    <div className="mainAppWindow">
      {/* Header */}
      <nav class="navbar navbar-light bg-light mb-5">
        <div class="container-fluid">
          <a class="navbar-brand mb-2">My Wallet</a>
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

      {/* Amounts */}
      <div className="showAmounts">
        {deposits.map((element, index) => {
          return (
            <Savings amount={ element } key={ index }/>
          );
        })}
      </div>
    </div>
  );
}

export default App;
