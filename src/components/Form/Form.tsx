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

	const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		setToggleMetric(!toggleMetric);
	};

	const handleSystem = () => {
		return toggleMetric ? (
			<Button
				type="submit"
				className="btn"
				text="Calculate"
				onClick={handleBmi}
			/>
		) : (
			<Button
				type="submit"
				className="btn"
				text="Calculate"
				onClick={handleBmiLbIn}
			/>
		);
	};

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
		setBmi(undefined);
	};

	return (
		<>
			<div className={styles["container"]}>
				<header>BMI Calculator</header>
				{console.log(toggleMetric)}

				<form>
					<div className={styles["height-section"]}>
						<div className={styles["section-title"]}>Height</div>
						<label>{toggleMetric ? "Meters" : "Inches"}</label>
						<Input
							onChange={updateHeight}
							value={height}
							type="number"
						/>
					</div>

					<div className={styles["weight-section"]}>
						<div className={styles["section-title"]}>Weight</div>
						<label>{toggleMetric ? "Kilograms" : "lbs"}</label>
						<Input
							onChange={updateWeight}
							value={weight}
							type="number"
						/>
					</div>
				</form>
				<div className={styles["results"]}>
					<div>
						{" "}
						{isNaN(bmi as number) ? "" : `Your BMI is: ${bmi}`}
					</div>
					<div> {getBmi(bmi)} </div>
				</div>
				<div className={styles["btn-container"]}>
					{handleSystem()}
					<a href="/" onClick={handleToggle}>
						{toggleMetric ? "Imperial" : "Metric"}
					</a>
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
