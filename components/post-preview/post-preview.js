import Avatar from "../avatar/avatar";
import Date from "../date/date";
import CoverImage from "../cover-image/cover-image";
import Link from "next/link";
import { imageBuilder } from "../../lib/sanity";
import styles from "./post-preview.module.scss";
export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<Link as={`/posts/${slug}`} href="/posts/[slug]">
			<div className={styles.container}>
				<div className={styles.coverImage}>
					<CoverImage
						slug={slug}
						title={title}
						imageObject={coverImage}
						url={imageBuilder(coverImage).url()}
					/>
				</div>
				<h3>
					<Link as={`/posts/${slug}`} href="/posts/[slug]">
						<a>{title}</a>
					</Link>
				</h3>
				<div className={styles.date}>
					<Date dateString={date} />
				</div>
				<p>{excerpt}</p>
				<Avatar name={author?.name} picture={author?.picture} />
			</div>
		</Link>
	);
}
