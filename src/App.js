import "./App.css";
import Timer from "./components/Timer";
function App() {
  return (
    <div className="App">
      <div className="timer-container">
        <h1>FIRST TIMER</h1>
        <Timer time={10000} step={1000} autostart />
      </div>

      <div className="timer-container">
        <h1>SECOND TIMER</h1>
        <Timer time={20000} step={2000} />
      </div>
    </div>
  );
}

export default App;
