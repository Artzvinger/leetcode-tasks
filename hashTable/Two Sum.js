/**
 * Type: Array / Hash Table / Easy
 * [1] Two Sum
 *
 * 📌 Условие: Дан массив nums и число target. Найдите индексы двух чисел,
 *             которые в сумме дают target. Каждый вход имеет ровно одно решение.
 *
 * 🔍 Маркеры: два числа, сумма = target, индексы, ровно одно решение.
 * 📏 Тип: Hash Map (один проход).
 * 🧠 Идея: Используем Map для хранения чисел и их индексов.
 *          Для каждого числа вычисляем complement = target - num.
 *          Если complement есть в Map - возвращаем индексы.
 *
 * ⏱ Сложность: O(n) по времени, O(n) по памяти.
 *
 * @param {number[]} nums - массив целых чисел
 * @param {number} target - целевая сумма
 * @return {number[]} - индексы двух чисел
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};