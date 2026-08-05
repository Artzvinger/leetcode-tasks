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

function findMissingBySumm(nums) {
    let n = nums.length;
    let expectedSum = n * (n + 1) / 2;
    let actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

function findMissingBySumm2(nums) {
    let numsLength = nums.length;
    const sum = numsLength*(numsLength+1)/2;
    const sum2 = nums.reduce((sum, num) => {
        return sum + num;
    }, 0)
    return sum - sum2;
}


console.log(findMissingBySumm([0,1,2,4,5]))
console.log(findMissingBySumm([0,1,2,3,5]))
console.log(findMissingBySumm([0,1,2,3,4,5,6,8,9]))


function findMissingByXor(nums: number[]): number {
    let xor = 0;

    // XOR-им все индексы (0..n-1) и все значения из массива
    for (let i = 0; i < nums.length; i++) {
        xor ^= i;        // Индекс: 0, 1, 2, ..., n-1
        xor ^= nums[i];  // Значение из массива
    }

    // Не забываем про последний индекс n (диапазон 0..n)
    xor ^= nums.length;

    return xor;
}