import React from "react";
import ToggleButton from "./ToggleButton/toggleButton";
import Link from "next/link";

import styles from "./mainheader.module.scss";

const Mainheader = () => {
	return (
		<div className={styles.header}>
			<div class={styles["logo"]}>
				<h1 className={styles.h1}>
					<Link href="/">
						<a className={styles.hoverunderline}>Blog</a>
					</Link>
				</h1>
			</div>
			<div class={styles["links"]}>
				<a href="#">Portfolio</a>
				<a href="#">More Posts</a>
			</div>
			<div class={styles["button"]}>
				<ToggleButton />
			</div>
		</div>
	);
};

export { Mainheader };
