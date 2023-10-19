import  Link  from "react-router-dom";
import classes from "./Style.module.css";

export default function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.name}>Black Dawg Vintage</h1>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/" legacyBehaviour >Home</Link>
            </li>

            <li>
              <Link href="/about"  legacyBehaviour>About</Link>
            </li>

            <li>
              <Link href="/new" legacyBehaviour>New</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
