
export function determineChange(currentTemp, targetTemp){
	//Change current temp based on the formlua
	//every second increase/decrease 1 degree
	const dT = 2;
	const dTc = 1.5;
	const dTh = 1;
	var Tc = parseInt(currentTemp);
	var Tt = parseInt(targetTemp);
	var coolOrHeat = "off"; //passed into dynamicbackgroundmodel

	if (Tc > (Tt + dT + dTc)){
		coolOrHeat = "cooling";

	} else if (Tc < (Tt - dT -dTh)){
		coolOrHeat = "heating";

	} else if ((Tt-(dT-dTh ))<Tc<(Tt+(dT-dTc))){
		coolOrHeat = "off";

	} else {
		coolOrHeat = "off";

	}

	return coolOrHeat;
};