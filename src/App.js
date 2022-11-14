import "./App.css";
import Home from "./pages/Home";
import Places from "./pages/Places";
import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Modal />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="places" element={<Places />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
