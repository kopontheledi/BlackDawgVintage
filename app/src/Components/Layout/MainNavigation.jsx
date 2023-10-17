import classes from './Style.module.css'

export default function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.name}>Black Dawg Vintage</h1>

<nav className={classes.nav}>

        <ul>
          <li>
            Home
          </li>

          <li>
            New
          </li>

          <li>
            About
          </li>
        </ul>
        </nav>
      </header>
    </div>
  );
}
