import React from "react";
import ToggleButton from "../ToggleButton/toggleButton";
import Link from "next/link";
import styles from "./mainheader.module.scss";
import { EndTag, Tag } from "../../components/icons/svg/index";

const Mainheader = () => {
	return (
		<div className={styles.header}>
			<div class={styles["logo"]}>
				<Tag height={5} stroke={35} />
				<h1>Matthew Rideout</h1>
				<EndTag height={5} stroke={35} />
			</div>
		</div>
	);
};

export { Mainheader };
