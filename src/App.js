import "./App.css";
import Parent from "./components/Parent";

function App() {
  const clickHandler = () => {
    console.log("Click")
  }
  return (
      <div className="App">
        <Parent clickHandler={clickHandler} />
      </div>
  );
}

export default App;
