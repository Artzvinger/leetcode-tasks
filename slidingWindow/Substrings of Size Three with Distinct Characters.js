/**
 * Type: String / Sliding Window / Easy
 * [1876] Substrings of Size Three with Distinct Characters
 *
 * 📌 Условие: Дана строка s. Посчитайте количество подстрок длины 3,
 *             в которых все символы различны.
 *
 * 🔍 Маркеры: подстроки длины 3, все символы разные, количество.
 * 📏 Тип: Фиксированное окно (размер 3).
 * 🧠 Идея: Проходим по строке, проверяя каждое окно из 3 символов.
 *          Если a !== b && b !== c && a !== c - увеличиваем счетчик.
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {string} s - строка из строчных латинских букв
 * @return {number} - количество "хороших" подстрок длины 3
 */
function countGoodSubstrings(s) {
    let count = 0;
    let window = new Set();
        for (let j = 0; j < s.length-2; j++) {
            const char= s[j];
            if (!window.has(char)) count++;
            window.add(char);
            if (window.size > 3) window.delete(s[j-3]);
        }
        return count;
}
console.log(countGoodSubstrings('qwerty'))


function countGoodSubstrings2(s) {
    let count = 0;

    for (let i = 0; i < s.length - 2; i++) {
        let a = s[i];
        let b = s[i + 1];
        let c = s[i + 2];

        if (a !== b && b !== c && a !== c) {
            count++;
        }
    }

    return count;
}