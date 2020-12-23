import Avatar from "../avatar/avatar";
import Date from "../date/date";
import CoverImage from "../cover-image/cover-image";
import Link from "next/link";
import styles from "./hero-post.module.scss";

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section className={styles.container}>
			<div className={styles.coverimage}>
				<CoverImage
					slug={slug}
					imageObject={coverImage}
					title={title}
					url={coverImage}
				/>
			</div>
			<div className={styles.postinfo}>
				<div>
					<h3>
						<Link as={`/posts/${slug}`} href="/posts/[slug]">
							<a>{title}</a>
						</Link>
					</h3>
					<div>
						<Date dateString={date} />
					</div>
				</div>
				<div>
					<p>{excerpt}</p>
					<Avatar name={author?.name} picture={author?.picture} />
				</div>
			</div>
		</section>
	);
}
