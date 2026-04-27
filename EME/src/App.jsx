import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Base } from "./components/Base";
import { Nav } from "./components/Nav";
import { Login } from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <Nav />

      <div className="Base-wrapper">
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;