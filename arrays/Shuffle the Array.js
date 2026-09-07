/**
 * Type: Array / Easy
 * [1470] Shuffle the Array
 *
 * 📌 Условие: Дан массив nums = [x1, x2, ..., xn, y1, y2, ..., yn].
 *             Верните перемешанный массив [x1, y1, x2, y2, ..., xn, yn].
 *
 * 🔍 Маркеры: перемешать, две половины, перестановка.
 * 📏 Тип: Два указателя.
 * 🧠 Идея: Берем элементы из первой и второй половин по очереди.
 *
 * ⏱ Сложность: O(n) по времени, O(n) по памяти.
 *
 * @param {number[]} nums - массив из 2n элементов
 * @param {number} n - половина длины
 * @return {number[]} - перемешанный массив
 */
var shuffle = function(nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    return result;
};