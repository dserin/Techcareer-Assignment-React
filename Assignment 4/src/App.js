import "./App.css";
import Navbar from "./components/Header/Navbar";
import About from "./components/Header/About";
import Profile from "./components/Header/Profile";
import Home from "./components/Header/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
