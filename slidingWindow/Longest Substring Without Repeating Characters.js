/**
 * Type: String / Sliding Window / Medium
 * [3] Longest Substring Without Repeating Characters
 *
 * 📌 Условие: Дана строка s. Найдите длину самой длинной подстроки
 *             без повторяющихся символов.
 *
 * 🔍 Маркеры: подстрока, без повторений, максимальная длина.
 * 📏 Тип: Скользящее окно (переменное) + Set.
 * 🧠 Идея: Используем два указателя (left, right). Расширяем окно вправо,
 *          пока все символы уникальны. При дубликате двигаем left.
 *
 * ⏱ Сложность: O(n) по времени, O(min(n, 26)) по памяти.
 *
 * @param {string} s - входная строка
 * @return {number} - длина самой длинной подстроки без повторений
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};