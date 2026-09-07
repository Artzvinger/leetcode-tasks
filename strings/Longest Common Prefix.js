/**
 * Type: String / Easy
 * [14] Longest Common Prefix
 *
 * 📌 Условие: Найдите самый длинный общий префикс среди массива строк.
 *             Если общего префикса нет, верните пустую строку "".
 *
 * 🔍 Маркеры: общий префикс, массив строк, горизонтальное сравнение.
 * 📏 Тип: Строковые операции.
 * 🧠 Идея: Берем первую строку как префикс. Сравниваем с каждой строкой,
 *          укорачивая префикс до тех пор, пока он не совпадет.
 *
 * ⏱ Сложность: O(n * m) по времени, O(1) по памяти.
 *
 * @param {string[]} strs - массив строк
 * @return {string} - самый длинный общий префикс
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};