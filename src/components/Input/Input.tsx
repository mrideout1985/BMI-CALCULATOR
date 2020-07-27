import React from "react";

interface Props {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	type?: "number" | "button" | "text" | undefined;
}

const Input: React.FC<Props> = ({ onChange, value, type }) => {
	return <input onChange={onChange} value={value} type={type} />;
};

export { Input };
