import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/index.js";
import "./css/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
