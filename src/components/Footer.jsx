import React from 'react';
import styles from './Main/styles.module.css'; // Import your CSS file

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span>Contact Us</span>
      <span>About Us</span>
      <span>© 2023 Vision Funding</span>
    </div>
  );
}
