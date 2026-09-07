/**
 * Type: Array / Math / Bit Manipulation / Easy
 * [268] Missing Number
 *
 * 📌 Условие: Дан массив nums, содержащий n различных чисел из диапазона [0, n].
 *             Найдите единственное пропущенное число в этом диапазоне.
 *
 * 🔍 Маркеры: пропущенное число, диапазон [0, n], различные числа.
 * 📏 Тип: Математика / XOR.
 * 🧠 Идея:
 *          - Через сумму: сумма всех чисел от 0 до n минус сумма элементов массива.
 *          - Через XOR: XOR-им все индексы (0..n-1) и все значения массива,
 *            затем XOR-им с n. Остается пропущенное число.
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {number[]} nums - массив из n различных чисел от 0 до n
 * @return {number} - пропущенное число
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = n * (n + 1) / 2;
    let actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
};