/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Demo App</h1>
        <nav className="navbar">
          <Link className="link" to="/home" element={<Home />}>
            Home
          </Link>
          <Link className="link" to="/about" element={<About />}>
            About
          </Link>
          <Link className="link" to="/contact" element={<Contact />}>
            Contact
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
