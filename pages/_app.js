import "../styles/sass/main.scss";
import ContextWrapper from "../context/ContextWrapper";
import Layout from "../components/layout";
import { Mainheader } from "../components/mainheader";

function MyApp({ Component, pageProps }) {
	return (
		<ContextWrapper>
			<Layout>
				<Mainheader />
				<Component {...pageProps} />;
			</Layout>
		</ContextWrapper>
	);
}

export default MyApp;
