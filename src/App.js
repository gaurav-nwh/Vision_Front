import { Route, Routes, Navigate } from "react-router-dom";
import styles from "../src/components/Main/styles.module.css";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Startup from "./components/Startup";
import Support from "./components/Support";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>

			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/startup" element={<Startup />} />
			<Route path="/support" element={<Support />} />
		</Routes>
	);
}

export default App;
