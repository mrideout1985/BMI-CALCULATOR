const getBmi = (bmi: number | undefined) => {
	if (bmi === undefined) {
		return;
	}
	if (bmi <= 16.0) {
		return " You are severely underweight. ";
	}
	if (bmi <= 18.4) {
		return " You are underweight. ";
	}
	if (bmi <= 24.9) {
		return " You are normal weight. ";
	}
	if (bmi <= 34.9) {
		return " You are overweight. ";
	}
	if (bmi <= 39.9) {
		return " You are moderately obese. ";
	}
	if (bmi > 40) {
		return " You are severely obese. ";
	}
};

export { getBmi };
