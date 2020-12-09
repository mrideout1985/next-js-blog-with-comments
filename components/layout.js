import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import styles from "./layout.module.scss";

export default function Layout({ preview, children }) {
	return (
		<>
			<Meta />
			<div className={styles.container}>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
