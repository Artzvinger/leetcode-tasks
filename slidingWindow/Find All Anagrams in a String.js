/**
 * Type: String / Sliding Window / Medium
 * [438] Find All Anagrams in a String
 *
 * 📌 Условие: Даны две строки s и p. Найдите все стартовые индексы анаграмм
 *             строки p в строке s.
 *
 * 🔍 Маркеры: анаграммы, скользящее окно, частоты символов.
 * 📏 Тип: Скользящее окно (фиксированный размер) + Map.
 * 🧠 Идея: Используем скользящее окно размером p.length.
 *          Сравниваем частоты символов в окне с частотами в p.
 *
 * ⏱ Сложность: O(n) по времени, O(26) по памяти.
 *
 * @param {string} s - строка для поиска
 * @param {string} p - строка для поиска анаграмм
 * @return {number[]} - массив стартовых индексов
 */
var findAnagrams = function(s, p) {
    const result = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    for (const char of p) {
        pCount[char.charCodeAt(0) - 97]++;
    }

    const pLen = p.length;

    for (let i = 0; i < s.length; i++) {
        sCount[s[i].charCodeAt(0) - 97]++;

        if (i >= pLen) {
            sCount[s[i - pLen].charCodeAt(0) - 97]--;
        }

        if (i >= pLen - 1) {
            let isAnagram = true;
            for (let j = 0; j < 26; j++) {
                if (sCount[j] !== pCount[j]) {
                    isAnagram = false;
                    break;
                }
            }
            if (isAnagram) result.push(i - pLen + 1);
        }
    }
    return result;
};