import styles from "./post-title.module.scss";

export default function PostTitle({ children }) {
	return <h1 className={styles.title}>{children}</h1>;
}
