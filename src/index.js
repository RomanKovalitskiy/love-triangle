/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	preferences.unshift(0);
	var count=0;
	for (i=1; i<preferences.length;i++) {
		var in2=preferences[i];
		if (preferences[i]===i && preferences[in2]===i) {
			continue;
		};
		var in3=preferences[in2];
		var in1=preferences[in3];
		if (isNaN(preferences[i]) && isNaN(preferences[in2]) && isNaN(preferences[in3])) {
			continue;
		};
		if (i===in1) {
			delete preferences[i];
			delete preferences[in2];
			delete preferences[in3];
			++count;
		};
	}
	return count;
};
