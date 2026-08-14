/**
 * Type: String / Hash Table / Easy
 * [13] Roman to Integer
 *
 * 📌 Условие: Дана римская цифра в виде строки. Преобразуйте её в целое число.
 *
 * 🔍 Маркеры: римские цифры, преобразование, I, V, X, L, C, D, M.
 * 📏 Тип: Hash Map / Один проход.
 * 🧠 Идея: Проходим по строке слева направо. Если текущий символ меньше следующего,
 *          вычитаем его значение (IV = 4, IX = 9). Иначе добавляем.
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {string} str - строка с римским числом
 * @return {number} - целое число
 */
var romanToInt = function(str) {
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let fin = 0;
    for (let i = 0; i < str.length; i++) {
        let a = romanMap.get(str[i]);
        let b = romanMap.get(str[i + 1]);

        if (b && a < b) {
            fin = fin - a;
        } else {
            fin = fin + a;
        }
    }
    return fin;
};