/**
 * Type: Math / Easy
 * [9] Palindrome Number
 *
 * 📌 Условие: Дано целое число x. Верните true, если оно является палиндромом
 *             (читается одинаково слева направо и справа налево).
 *
 * 🔍 Маркеры: палиндром, число, без преобразования в строку.
 * 📏 Тип: Математика (реверс числа).
 * 🧠 Идея: Переворачиваем число математически (не превращая в строку)
 *          и сравниваем с оригиналом. Отрицательные числа - не палиндромы.
 *
 * ⏱ Сложность: O(log n) по времени, O(1) по памяти.
 *
 * @param {number} x - целое число
 * @return {boolean} - true, если число палиндром
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;

    let original = x;
    let reversed = 0;

    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return original === reversed;
};