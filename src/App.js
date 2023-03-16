import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import Header from "./components/Header/Header";
import Service from "./pages/Services/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/services/:id" element={<Service/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
