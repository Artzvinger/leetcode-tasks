/**
 * Type: Array / Easy
 * [1929] Concatenation of Array
 *
 * 📌 Условие: Дан массив nums длины n. Верните массив ans длины 2n,
 *             где ans[i] = nums[i] и ans[i+n] = nums[i].
 *
 * 🔍 Маркеры: конкатенация, удвоение массива.
 * 📏 Тип: Массив.
 * 🧠 Идея: Создаем новый массив, копируя nums дважды.
 *
 * ⏱ Сложность: O(n) по времени, O(n) по памяти.
 *
 * @param {number[]} nums - массив целых чисел
 * @return {number[]} - сконкатенированный массив
 */
var getConcatenation = function(nums) {
    return [...nums, ...nums];
};