import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Dragon Ball API</h1>
      <ul className={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
