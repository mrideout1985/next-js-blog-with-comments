import Link from "next/link";
import styles from "./header.module.scss";
import ToggleButton from "./ToggleButton/toggleButton";

export default function Header() {
	return (
		<h1 className={styles.h1}>
			<Link href="/">
				<a className={styles.hoverunderline}>Blog</a>
			</Link>
			.
		</h1>
	);
}
