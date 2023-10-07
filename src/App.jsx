import "./App.css";
import useCounter from "./customHooks/useCounter";

function App() {
  const { count, handlePlus, handleMinus } = useCounter();

  return (
    <div className="App" style={{ display: "flex" }}>
      <button onClick={handleMinus}>-</button>
      {count}
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default App;
