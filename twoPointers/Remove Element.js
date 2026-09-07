/**
 * Type: Array / Two Pointers / Easy
 * [27] Remove Element
 *
 * 📌 Условие: Дан массив nums и значение val. Удалите все элементы, равные val,
 *             на месте. Верните новую длину массива.
 *
 * 🔍 Маркеры: удалить элемент, на месте, val, два указателя.
 * 📏 Тип: Два указателя.
 * 🧠 Идея: Используем указатель i для места вставки элементов != val.
 *          Проходим по массиву, если элемент != val, копируем его в позицию i.
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {number[]} nums - массив целых чисел
 * @param {number} val - значение для удаления
 * @return {number} - новая длина массива
 */
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};