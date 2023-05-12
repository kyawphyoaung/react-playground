import "./App.css";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/aboutus">AboutUs</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1> My Website</h1>
    </div>
  );
}

export function AboutUs() {
  return (
    <div>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/aboutus">AboutUs</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Us</h1>
      <Outlet />
    </div>
  );
}

export function OurHistory() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/aboutus">AboutUs</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
