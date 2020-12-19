import PostPreview from "../components/post-preview";
import styles from "./more-stories.module.scss";

export default function MoreStories({ posts }) {
	return (
		<section className={styles.container}>
			<h2>More Stories</h2>
			<div className={styles.storiesgrid}>
				{posts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</section>
	);
}
