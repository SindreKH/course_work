const input = document.querySelector("#input");
const unit = document.querySelector("#unit");
const resultTxt = document.querySelector("#resultTxt");

//SWITCH/CASE

//prettier-ignore
const convertUnit = () => {
	let result = "";
	switch (unit.value) {
		case "lbs2kg":
			result = `${input.value} lbs equals ${(input.value / 2.2).toFixed(2)} kg`;
			break;
		case "kg2lbs":
			result = `${input.value} kg equals ${(input.value * 2.2).toFixed(2)} lbs`;
			break;
		case "inch2cm":
			result = `${input.value} inch equals ${(input.value * 2.54).toFixed(2)} cm`;
			break;
		case "cm2inch":
			result = `${input.value} cm equals ${(input.value / 2.54).toFixed(2)} inch`;
			break;
		case "mile2km":
			result = `${input.value} mile equals ${(input.value * 1.6).toFixed(2)} km`;
			break;
		case "km2mile":
			result = `${input.value} km equals ${(input.value / 1.6).toFixed(2)} mile`;
			break;
		default:
			result = "Error";
	}
	resultTxt.textContent = result;
};
