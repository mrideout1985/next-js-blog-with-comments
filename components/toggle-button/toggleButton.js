import { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../../context/DarkModeContext";
import styles from "./toggleButton.module.scss";

const ToggleButton = () => {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
	return (
		<div className={styles["wrapper"]}>
			<label class={styles["switch"]} for="checkbox">
				<input onClick={toggleDarkMode} type="checkbox" id="checkbox" />
				<div class={styles["slider"]} />
			</label>
		</div>
	);
};

export default ToggleButton;
