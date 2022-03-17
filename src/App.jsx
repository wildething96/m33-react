import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";

function App() {
  const [account, setAccount] = useState({});

  return (
    <Router>
        <button onClick={() => console.log(account)}>Click Here</button>
      <Routes>
        <Route path="/" element={<Home account={account}/>} />
        <Route path="/login" element={<Login setAccount={setAccount} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
