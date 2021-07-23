import Header from "./components/Header";
import TotalSavings from "./components/TotalSavings";
import Amount from "./components/Amount";

function App() {

  // Function to get deposited amount from input field
  const getAmount = () => {
  const val = document.getElementById("amount").value;
    }


    
  // Savings Data
  const Amounts = [{
    "DATE": "Tuesday",
    "SAVED": "250"
  },
  {
    "DATE": "Wednesday",
    "SAVED": "180"
  },
  {
    "DATE": "Thursday",
    "SAVED": "160"
  }]



  return (
    <div className="mainAppWindow">
      <Header onClick={getAmount}/>
      <TotalSavings totalAmount={Amounts} />
    </div>
  );
}

export default App;
