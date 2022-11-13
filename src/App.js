import "./App.css";
import Home from "./pages/Home";
import Places from "./pages/Places";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="places" element={<Places />} />
      </Routes>
    </div>
  );
}

export default App;
