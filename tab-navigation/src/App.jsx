import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/profile" />} />
        <Route path="/dashboard/:tabName" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
