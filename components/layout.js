import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import styles from "./layout.module.scss";
import { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../context/DarkModeContext";

const Layout = styled.div`
	background-color: ${(props) => (props.darkMode ? "#202945" : "white")};
	color: ${(props) => (props.darkMode ? "#dce0cd" : "black")};

	time {
		color: ${(props) => (props.darkMode ? "#dce0cd" : "black")};
	}

	p {
		color: ${(props) => (props.darkMode ? "#dce0cd" : "black")};
	}

	a {
		color: ${(props) => (props.darkMode ? "#dce0cd" : "black")};
	}

	h1 {
		color: ${(props) => (props.darkMode ? "#dce0cd" : "black")};
	}
`;
export default ({ children, preview }) => {
	const { darkMode } = useContext(DarkModeContext);
	return <Layout darkMode={darkMode}>{children}</Layout>;
};
