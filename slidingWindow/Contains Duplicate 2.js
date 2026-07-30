/**
 * Type: Array / Two Pointers / Sliding Window / Medium
 * [209] Minimum Size Subarray Sum
 *
 * 📌 Условие: Дан массив положительных целых чисел nums и число target.
 *             Найдите минимальную длину подмассива, сумма которого ≥ target.
 *             Если такого подмассива нет, верните 0.
 *
 * 🔍 Маркеры: минимальная длина, подмассив, сумма ≥ target, положительные числа.
 * 📏 Тип: Переменное окно (динамическое).
 * 🧠 Идея: Расширяем окно вправо, накапливая сумму. Как только сумма ≥ target,
 *          сужаем окно слева, обновляя минимальную длину. Повторяем до конца массива.
 *
 * ⏱ Сложность: O(n) по времени, O(1) по памяти.
 *
 * @param {number} target - целевая сумма
 * @param {number[]} nums - массив положительных целых чисел
 * @return {number} - минимальная длина подмассива или 0
 */
function containsNearbyDuplicate(nums, k) {
    let window = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (window.has(nums[i])) return true;

        window.add(nums[i]);

        if (window.size > k) window.delete(nums[i-k]);
    }

    return false;
}
console.log(containsNearbyDuplicate([3,4,6,1,3,10,5,9], 3))