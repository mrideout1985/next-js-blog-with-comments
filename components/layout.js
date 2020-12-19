import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import styles from "./layout.module.scss";
import { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../context/DarkModeContext";

const Layout = styled.div`
	background-color: ${(props) => (props.darkMode ? "#202945" : "white")};
	color: ${(props) => (props.darkMode ? "white" : "black")};
`;

export default ({ children, preview }) => {
	const { darkMode } = useContext(DarkModeContext);
	return <Layout darkMode={darkMode}>{children}</Layout>;
};
