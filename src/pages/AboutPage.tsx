import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>About This App</h1>
      <p>
        Welcome to the Dragon Ball Character Encyclopedia! This application allows you to explore various characters from the Dragon Ball universe.
      </p>
      <p>
        You can view detailed information about each character, including their abilities, transformations, and origin planets.
      </p>
      <p>
        This app is designed to be user-friendly and responsive, ensuring a great experience across devices.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Search for characters by name.</li>
        <li>View detailed character profiles.</li>
        <li>Responsive design for mobile and desktop.</li>
        <li>Bookmark your favorite characters.</li>
      </ul>
      <h2>API Used</h2>
      <p>
        The data is fetched from the Dragon Ball API, providing accurate and up-to-date information about characters and their backgrounds.
      </p>
    </div>
  );
};

export default AboutPage;
