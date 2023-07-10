import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul className="App__Navbar">
        <li>
          <Link to="/welcome">
            <h2>Home</h2>
          </Link>
        </li>
        <li>
          <Link to="/product">
            <h2>Prodotti </h2>
          </Link>
        </li>
        <li>
          <Link to ="/About">
            <h2>About</h2>
          </Link>
        </li>
        <li>
          <Link to ="/Contacts">
            <h2>Contacts</h2>
          </Link>
        </li>
        <li>
          <Link to ="/Locations">
            <h2>Locations</h2>
          </Link>
        </li>
        <Outlet />
      </ul>
    </div>
  );
}

export default App;
