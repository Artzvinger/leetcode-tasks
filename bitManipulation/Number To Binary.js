/**
 * Type: Math / String / Easy
 * [No LeetCode] Binary Conversion (Number to Binary & Binary to Number)
 *
 * 📌 Условие: Напишите функции для конвертации:
 *             - toNumber(bin): преобразует бинарную строку в десятичное число
 *             - toBinary(num): преобразует десятичное число в бинарную строку
 *
 * 🔍 Маркеры: бинарная строка, десятичное число, конвертация, основание 2.
 * 📏 Тип: Математика / строки.
 * 🧠 Идея:
 *          - toNumber: проходим по бинарной строке, умножаем результат на 2
 *            и добавляем значение текущего бита (0 или 1)
 *          - toBinary: делим число на 2, собираем остатки в обратном порядке
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {string} bin - бинарная строка (например, '101')
 * @return {number} - десятичное число (например, 5)
 */
function toNumber(bin) {
	let result = 0;
	for (let i = 0; i < bin.length; i++) {
		result = result * 2;
		if (bin[i] === '1') {
			result = result + 1;
		}
	}
	return result;
}

/**
 * @param {number} num - десятичное число (например, 5)
 * @return {string} - бинарная строка (например, '101')
 */
function toBinary(num) {
	let result = '';
	while (num > 0) {
		result = (num % 2) + result;
		num = Math.floor(num / 2);
	}
	return result || '0';

console.log(toNumber('101'));
console.log(toNumber('1111'));
console.log(toBinary(5));
console.log(toBinary(121));