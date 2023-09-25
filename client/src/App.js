import "./App.css";
import { Routes, Route } from "react-router-dom";
import LabPage from "./components/LabPage";
import Labs from "./components/Labs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/labs" element={<Labs />} />
        <Route path="/labpage" element={<LabPage />} />
      </Routes>
    </div>
  );
}

export default App;
