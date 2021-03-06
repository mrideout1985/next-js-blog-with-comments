import Avatar from "../../components/avatar/avatar";
import Date from "../../components/date/date";
import CoverImage from "../../components/cover-image/cover-image";
import { imageBuilder } from "../../lib/sanity";
import styles from "./post-header.module.scss";
import PostTitle from "../post-title/post-title";
export default function PostHeader({ title, coverImage, date, author }) {
	return (
		<>
			<div className={styles["coverimage-container"]}>
				<CoverImage
					title={title}
					imageObject={coverImage}
					url={coverImage}
				/>
			</div>
			<PostTitle>{title}</PostTitle>

			<div className={styles["author-date-container"]}>
				<div className={styles["avatar-container"]}>
					<Avatar name={author?.name} picture={author?.picture} />
				</div>
				<div className={styles["date-container"]}>
					<Date dateString={date} />
				</div>
			</div>
		</>
	);
}
