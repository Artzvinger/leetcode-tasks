/**
 * Type: String / Backtracking / Recursion / Medium
 * [17] Letter Combinations of a Phone Number
 *
 * 📌 Условие: Дана строка digits, содержащая цифры от 2 до 9.
 *             Верните все возможные комбинации букв, которые эти цифры могут представлять
 *             (как на телефонной клавиатуре).
 *
 * 🔍 Маркеры: комбинации букв, телефонная клавиатура, цифры 2-9, все варианты.
 * 📏 Тип: Backtracking / BFS.
 * 🧠 Идея: Используем BFS (итеративный подход). Начинаем с пустой строки.
 *          Для каждой цифры берем все текущие комбинации и добавляем к каждой
 *          все возможные буквы для этой цифры. Обновляем результат.
 *
 * ⏱ Сложность: O(4^n) по времени (максимум 4 буквы на цифру), O(n) по памяти.
 *
 * @param {string} digits - строка цифр от 2 до 9
 * @return {string[]} - массив всех возможных комбинаций букв
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    let result = [''];
    
    for (const digit of digits) {
        const temp = [];
        for (const prefix of result) {
            for (const letter of map[digit]) {
                temp.push(prefix + letter);
            }
        }
        result = temp;
    }
    
    return result;
};
