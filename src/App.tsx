import logo from "./logo.svg";
import "./App.css";
import useCounter from "./useCounter";

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p data-testid="count">{count}</p>
        <button data-testid="increment-btn" onClick={increment}>
          Increment
        </button>
        <button data-testid="decrement-btn" onClick={decrement}>
          Decrement
        </button>
      </header>
    </div>
  );
}

export default App;
