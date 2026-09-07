/**
 * Type: Math / Easy
 * [2469] Convert the Temperature
 *
 * 📌 Условие: Дана температура в градусах Цельсия.
 *             Верните массив [Кельвин, Фаренгейт].
 *
 * 🔍 Маркеры: конвертация температуры, Цельсий, Кельвин, Фаренгейт.
 * 📏 Тип: Математика.
 * 🧠 Идея: Используем формулы:
 *          Kelvin = Celsius + 273.15
 *          Fahrenheit = Celsius * 1.80 + 32.00
 *
 * ⏱ Сложность: O(1) по времени, O(1) по памяти.
 *
 * @param {number} celsius - температура в градусах Цельсия
 * @return {number[]} - массив [Кельвин, Фаренгейт]
 */
var convertTemperature = function(celsius) {
    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.80 + 32.00;
    return [kelvin, fahrenheit];
};