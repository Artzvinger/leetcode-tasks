/**
 * Type: Array / Two Pointers / Easy
 * [167] Two Sum II - Input Array Is Sorted
 *
 * 📌 Условие: Дан отсортированный массив чисел и число target.
 *             Найдите два числа, которые в сумме дают target.
 *             Верните их индексы (1-based).
 *
 * 🔍 Маркеры: отсортированный массив, два числа, сумма = target.
 * 📏 Тип: Два указателя (Two Pointers).
 * 🧠 Идея: Ставим указатели в начало и конец массива. Если сумма больше target -
 *          сдвигаем правый указатель влево. Если меньше - сдвигаем левый вправо.
 *          При равенстве - возвращаем индексы.
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {number[]} sortedArray - отсортированный массив целых чисел
 * @param {number} target - целевая сумма
 * @return {number[]} - массив с индексами двух чисел
 */
function twoSum (sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;
        while (left < right) {
        let sum = sortedArray[left] + sortedArray[right];
        if (sum > target) {
            right--;
        }
        if (sum < target) {
            left++;
        }
        if (sum === target) {
            return [left, right];
        }
    }
}
console.log(twoSum([2,7,11,15]), 9)