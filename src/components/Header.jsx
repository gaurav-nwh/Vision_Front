import React from 'react';
import styles from "../components/Main/styles.module.css";
import { Link ,Route,Routes} from "react-router-dom";



export default function Header() {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <div >
			<nav className={styles.navbar}>
				<h1>Vision Funding</h1>

		
				<Link to="/" className={`${styles.white_btn} ${styles.hom}`}>Home</Link>
				<Link to="/startup" className={`${styles.white_btn} ${styles.star}`}>Startup</Link>
				<Link to="/support" className={`${styles.white_btn} ${styles.supp}`}>Support</Link>
				
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
  )
}
