function toNumber(bin) {
	let result = 0;
	for (let i = 0; i < bin.length; i++) {
		result = result * 2;
		if (bin[i] === '1') {
			result = result + 1;
		}
	}
	return result
}
console.log(toNumber('101'))
console.log(toNumber('1111'))

function toBinary(num) {
	let result = '';
	while (num > 0) {
		result = (num % 2) + result;
		num = Math.floor(num / 2)
	}
	return result;
}

console.log(toBinary('5'))
console.log(toBinary('121'))