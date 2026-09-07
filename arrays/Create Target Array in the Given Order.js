/**
 * Type: Array / Simulation / Easy
 * [1389] Create Target Array in the Given Order
 *
 * 📌 Условие: Даны два массива nums и index. Создайте целевой массив,
 *             вставляя nums[i] в позицию index[i].
 *
 * 🔍 Маркеры: вставка, позиция, массив.
 * 📏 Тип: Array.splice().
 * 🧠 Идея: Используем splice для вставки элементов в нужные позиции.
 *
 * ⏱ Сложность: O(n^2) по времени (из-за splice), O(n) по памяти.
 *
 * @param {number[]} nums - массив чисел
 * @param {number[]} index - массив позиций для вставки
 * @return {number[]} - целевой массив
 */
var createTargetArray = function(nums, index) {
    const target = [];
    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }
    return target;
};