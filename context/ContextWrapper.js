import { useState } from "react";
import { DarkModeContext } from "./DarkModeContext";
export default (props) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((darkMode) => !darkMode);
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{props.children}
		</DarkModeContext.Provider>
	);
};
