import { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../../context/DarkModeContext";

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
		color: ${(props) => (props.darkMode ? "#67a030" : "black")};

		&:hover {
			color: ${(props) => (props.darkMode ? "#ccdb86" : "black")};
		}
	}

	h1,
	h2,
	h3 {
		color: ${(props) => (props.darkMode ? "#dce0cd" : "black")};
	}

	transition: all 0.25s ease-in;
`;
export default ({ children, preview }) => {
	const { darkMode } = useContext(DarkModeContext);
	return <Layout darkMode={darkMode}>{children}</Layout>;
};
