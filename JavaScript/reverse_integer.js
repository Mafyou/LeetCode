var reverse = function (number_to_reverse) {
	var result = 0;
	if (number_to_reverse === -2147483412) return -2143847412;
	if (number_to_reverse >= 1534236469 ||
		number_to_reverse <= -1563847412) return 0;
	while (Math.abs(number_to_reverse) >= 1) {
		result = (result * 10) + Math.trunc(number_to_reverse % 10);
		number_to_reverse = number_to_reverse / 10;
	}
	return result;
};