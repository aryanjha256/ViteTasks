import "./App.css";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-text dark">
      <div id="handle">
        <h1 className="text-2xl text-primary">Your Tasks</h1>
        <h1 className="text-lg text-secondary">Manage Your Tasks</h1>
        <Login />
      </div>
    </div>
  );
};

export default App;
