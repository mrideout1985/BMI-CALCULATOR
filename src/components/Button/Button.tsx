import React from "react";
import styles from "./Button.module.scss";

interface Props {
	type: "submit" | "reset" | "button";
	text: string;
	className: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({ type, text, onClick, className }) => {
	return (
		<button onClick={onClick} className={styles[`${className}`]}>
			{text}
		</button>
	);
};

export default Button;
