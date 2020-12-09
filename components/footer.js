import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import styles from "./footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.container}>
			<Container>
				<div className={styles.name}>Matt Rideout</div>
			</Container>
		</footer>
	);
}
