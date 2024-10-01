import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 EverEsli. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <button className={styles.backToTop} onClick={() => window.scrollTo(0, 0)}>
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
