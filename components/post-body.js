import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";
import styles from "./post-body.module.scss";

export default function PostBody({ content }) {
	return (
		<div className={styles.container}>
			<BlockContent
				blocks={content}
				projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
				dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
				className={markdownStyles.markdown}
			/>
		</div>
	);
}
