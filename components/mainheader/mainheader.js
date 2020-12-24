import React from "react";
import ToggleButton from "../toggle-button/toggleButton";
import Link from "next/link";
import styles from "./mainheader.module.scss";
import { EndTag, Tag } from "../../components/icons/svg/index";

const Mainheader = () => {
	return (
		<div className={styles.header}>
			<div class={styles["logo"]}>
				<Tag height={4} stroke={35} />
				<h1>Matthew Rideout</h1>
				<EndTag height={4} stroke={35} />
			</div>
			<div class={styles["menu"]}>
				<Link href="/">Home</Link>
				<Link href="/">About</Link>
				<Link href="/">Porfolio</Link>
			</div>
			<div class={styles["toggle"]}>
				<ToggleButton />
			</div>
		</div>
	);
};

export { Mainheader };
