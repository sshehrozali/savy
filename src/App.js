import Header from "./components/Header";
import Amount from "./components/Amount";

function App() {

  // Function to get deposited amount from input field
  const getAmount = () => {
  const val = document.getElementById("amount").value;
  
  // Create new child Div
  const childDiv = document.createElement("p");
  childDiv.innerText = val;

  // Append child Div -> parent Div
  const parentDiv = document.getElementById("savingsContainer");
  parentDiv.appendChild(childDiv);
  
    }

  const Amounts = [{
    "DATE": "Tuesday",
    "SAVED": "250"
  }]

  return (
    <div className="mainAppWindow">
      <Header onClick={getAmount}/>
      <Amount allAmounts={Amounts}/>
      <div id="savingsContainer"></div>
    </div>
  );
}

export default App;
