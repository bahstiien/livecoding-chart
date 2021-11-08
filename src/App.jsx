import "./App.css";
import BarChart from "./Components/BarChart";
import PieChart from "./Components/PieChart";
import PolarAreaChart from "./Components/PolarAreaChart";

function App() {
  return (
    <div className="App">
      <h1> LIVECODING 04/11</h1>
      <PolarAreaChart />
      <BarChart />
      <PieChart />
    </div>
  );
}

export default App;
