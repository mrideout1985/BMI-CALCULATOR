import React, { useState } from "react";
import { getBmi } from "../../categories/bmiCategories";
import styles from "./Form.module.scss";
import Button from "../Button/Button";
import { Input } from "../Input/Input";

const Form = () => {
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [toggleMetric, setToggleMetric] = useState(false);
	const [bmi, setBmi] = useState<number>();

	const handleBmi = () => {
		let heightVal: number;
		let weightVal: number;
		let bmiVal: number | undefined;

		heightVal = parseFloat(height);
		weightVal = parseInt(weight);
		bmiVal = weightVal / (heightVal * heightVal);

		return setBmi((bmiVal = parseFloat(bmiVal.toFixed(1))));
	};

	const handleToggle = () => {};

	const handleBmiLbIn = () => {
		let heightVal: number;
		let weightVal: number;
		let bmiVal: number | undefined;

		heightVal = parseFloat(height);
		weightVal = parseInt(weight);
		bmiVal = 703 * (weightVal / (heightVal * heightVal));
		console.log(bmiVal);

		setBmi((bmiVal = parseFloat(bmiVal.toFixed(1))));
	};

	const updateWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setWeight(e.target.value);
	};

	const updateHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setHeight(e.target.value);
	};

	const reset = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		setWeight("");
		setHeight("");
	};

	return (
		<>
			<div className={styles["container"]}>
				<header>BMI Calculator</header>
				<form>
					<div className={styles["height-section"]}>
						<div className={styles["section-title"]}>Height</div>
						<label>Meters</label>
						<Input onChange={updateHeight} value={height} />
					</div>

					<div className={styles["weight-section"]}>
						<div className={styles["section-title"]}>Weight</div>
						<label>Kilograms</label>
						<Input onChange={updateWeight} value={weight} />
					</div>
				</form>
				<div className={styles["results"]}>
					<div>{isNaN(bmi as number) ? "" : bmi}</div>
					{getBmi(bmi)}
				</div>
				<div className={styles["btn-container"]}>
					<Button
						type="submit"
						className="btn"
						text="Calculate"
						onClick={handleBmi}
					/>
					<a href="/" onClick={reset}>
						Reset
					</a>
				</div>
				{}
			</div>
		</>
	);
};

export { Form };
