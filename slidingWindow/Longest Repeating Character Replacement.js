/**
 * Type: String / Sliding Window / Medium
 * [424] Longest Repeating Character Replacement
 *
 * 📌 Условие: Дана строка s и число k. Вы можете заменить k символов
 *             на любые другие. Найдите длину самой длинной подстроки,
 *             состоящей из одного повторяющегося символа.
 *
 * 🔍 Маркеры: замена символов, максимальная длина, повторяющийся символ.
 * 📏 Тип: Скользящее окно + Map частот.
 * 🧠 Идея: Используем скользящее окно. Поддерживаем частоту символов.
 *          Если (длина окна - максимальная частота) > k, сдвигаем left.
 *
 * ⏱ Сложность: O(n) по времени, O(26) по памяти.
 *
 * @param {string} s - входная строка
 * @param {number} k - количество замен
 * @return {number} - максимальная длина подстроки
 */
var characterReplacement = function(s, k) {
    const count = new Map();
    let left = 0;
    let maxFrequency = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        count.set(s[right], (count.get(s[right]) || 0) + 1);
        maxFrequency = Math.max(maxFrequency, count.get(s[right]));

        while ((right - left + 1) - maxFrequency > k) {
            count.set(s[left], count.get(s[left]) - 1);
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};