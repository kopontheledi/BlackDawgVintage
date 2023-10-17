import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <div>
      <header>
        <h1>Black Dawg Vintage</h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/new">New</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
