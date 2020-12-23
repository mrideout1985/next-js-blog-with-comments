import Container from "../components/container/container";
import MoreStories from "../components/more-stories/more-stories";
import HeroPost from "../components/hero-post/hero-post";
import Layout from "../components/layout/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts, preview }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Matt Rideout Blog with {CMS_NAME}</title>
				</Head>
				<Container>
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);
	return {
		props: { allPosts, preview },
		revalidate: 1,
	};
}
