
import styles from './../styles/header.module.css';
import logo from './../images/ballerini-logo.png';
import discord from './../images/discord.png';
import facebook from './../images/facebook.png';
import linkedin from './../images/linkedin.png';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        
        <div className={styles.headerLogo}>
          <Link to="/">
            <img src={logo} alt="Ballerini Devs" />
          </Link>
        </div>
        <div className={styles.headerIcons}>
          <ul className={styles.headerIconsList}>
            <li>
              <a href="#"><img src={linkedin} alt="Linkedin" /></a>
            </li>
            <li>
              <a href="#"><img src={facebook} alt="Facebook" /></a>
            </li>
            <li>
              <a href="#"><img src={discord} alt="Discord" /></a>
            </li>
          </ul>
        </div>

      </div>
    </header>
  )
}

