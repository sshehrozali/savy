import React from "react";
import ReactDOM from "react-dom";

function App() {

  // Declared React useState()
  const [state, setState] = React.useState({
    amount: "",
  });

  // Function to update state.amount value
  function updateVal(event) {
    setState({
      amount: event.target.value,
    });
  }

  function add(e) {
    e.preventDefault();
    
    // TODO
  }

  return (
    <div className="mainAppWindow">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">My Wallet</a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Enter Amount Here"
              aria-label="Search"
              onChange={updateVal}
              id="amount-field"
            />
            <button class="btn btn-outline-success" onClick={add}>
              Deposit
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default App;
