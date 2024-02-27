
import React from "react";
import styles from "./styles.module.css";
import Home from "../Home";
import Startup from "../Startup";
import Support from "../Support";
import { Link ,Route,Routes} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const Main = () => {


	return (
		<div className={`${styles.backgroundImage} ${styles.main_container}`}>
		<Header />
		<Footer/>

	</div>
		);
};


export default Main;
