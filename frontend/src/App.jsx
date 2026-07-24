import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<h1>Products Page</h1>} />
        <Route path="/suppliers" element={<h1>Suppliers Page</h1>} />
        <Route path="/reports" element={<h1>Reports Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;