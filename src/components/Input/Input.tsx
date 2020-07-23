import React from "react";

interface Props {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const Input: React.FC<Props> = ({ onChange, value }) => {
	return <input onChange={onChange} value={value} />;
};

export { Input };
