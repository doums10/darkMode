import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./style.css"

export default function App() {
	const [darkMode, setDarkMode] = React.useState(true);
	function toggle() {
		setDarkMode((prevDark) => !prevDark);
	}
	return (
		<div className="container">
			<Navbar darkMode={darkMode} toggleDarkMode={toggle} />
			<Main darkMode={darkMode} />
		</div>
	);
}
