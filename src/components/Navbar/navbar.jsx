import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css"
const Navbar=()=> {
  return (
    <header className={styles.navbar}>
      <Link to="/landing">Logo</Link>
      <nav>
        <input id='hamburgar' type="checkbox" hidden  className={styles.hamburgarCheckBox}/>
        <ul>
          <li><Link to="/landing">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/investing">Investing</Link></li>
          <li><Link to="/countries">Countries</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link className={styles.joinButton} to="./signup">Join</Link></li>
        </ul>
        <label  className={styles.hamburgar} htmlFor="hamburgar">
          <div></div>
          <div></div>
          <div></div>
        </label>

      </nav>

    </header>
  )
}
export default Navbar;