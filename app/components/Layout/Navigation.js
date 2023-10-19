import Link from "next/link";
import Logo from "./Logo";
import classes from './Layout.module.css'

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        
          <Logo/>
        
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/new">New</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
