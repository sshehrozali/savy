import React from "react";
import ReactDOM from "react-dom";
import Savings from "./components/Savings";

function App() {

  // DATE & TIME //
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function getDate() {
    // Get Current Date
    const today = new Date();
    const DateTime = `${days[today.getDay() - 1]}, ${today.getDate()} ${
      months[today.getMonth() - 1]
    }`;
    return DateTime
  }

  // STATES //
  // Store Current State value
  const [saving, setSaving] = React.useState({
    amount: "",
    date: "",
  });
  // Store Deposited Amount value
  const [deposits, addDepositAmount] = React.useState(GetLocalStorageData());

  // EVENT HANDLERS //
  // When DOM is loaded
  function GetLocalStorageData() {
    const Data = [];

    // Get Each Data from LocalStorage()
    for (var i = 0; i < localStorage.length; i++) {
      const CurrentItem = JSON.parse(localStorage.getItem(i + 1));

      // Push Object into Data array
      Data.push({
        amount: CurrentItem[0],
        date: CurrentItem[1]
      });
    };
    return Data;
  };
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
    GetLocalStorageData();
  }

  // Add Savings
  const addAmount = () => {
    if (saving.amount != "") {

      // Update saving state
      setSaving({
        amount: saving.amount,
        date: getDate(),
      });

      // Store each deposited amount value inside state
      addDepositAmount([...deposits, saving]);

      // Add Each Saving to LocalStorage()
      localStorage.setItem(localStorage.length + 1, JSON.stringify([saving.amount, saving.date]));
    };
  };

  return (
    <div className="mainAppWindow">

      {/* Header Component */}
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
              value={saving.amount}
              onChange={(e) => setSaving({ amount: e.target.value, date: getDate() })}
              onKeyPress={EnterKey}
              id="amount-field"
            />
            <button class="btn btn-outline-success" onClick={ButtonPress}>
              Deposit
            </button>
          </form>
        </div>
      </nav>

      {/* Savings Component */}
      <div className="showAmounts">
        {

          deposits.map((Obj, index) => {
            return(
              <Savings key={ index } date={ Obj.date } amount={ Obj.amount } />
            );
          })

        }
      </div>
    </div>
  );
}

export default App;
