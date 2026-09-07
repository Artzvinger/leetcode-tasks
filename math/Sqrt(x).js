/**
 * Type: Math / Binary Search / Easy
 * [69] Sqrt(x)
 *
 * 📌 Условие: Верните квадратный корень из x, округленный вниз до целого числа.
 *
 * 🔍 Маркеры: квадратный корень, округление вниз, бинарный поиск.
 * 📏 Тип: Бинарный поиск.
 * 🧠 Идея: Используем бинарный поиск. Находим наибольшее число mid,
 *          где mid * mid <= x.
 *
 * ⏱ Сложность: O(log n) по времени, O(1) по памяти.
 *
 * @param {number} x - целое неотрицательное число
 * @return {number} - целая часть квадратного корня
 */
var mySqrt = function(x) {
    if (x < 2) return x;

    let left = 1;
    let right = Math.floor(x / 2);
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === x) return mid;
        if (square < x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
};